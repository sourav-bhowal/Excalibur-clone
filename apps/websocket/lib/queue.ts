import { config } from "envs/config";
import amqp, { Connection, Channel, ConsumeMessage } from "amqplib";

// Define connection and channel variables as null
let connection: Connection | null = null;
let channel: Channel | null = null;

// Exchange PUB/SUB setup for RabbitMQ
const setupExchange = async (channel: Channel) => {
  // Assert the exchange with name "shape_updates" and type "fanout"
  await channel.assertExchange("shape_updates", "fanout", { durable: true });

  // Assert the queue with name "chatQueue" and make it durable
  await channel.assertQueue("chatQueue", { durable: true });

  // Bind the queue to the exchange with empty routing key to get all messages
  await channel.bindQueue("chatQueue", "shape_updates", "");
};

// Connect to RabbitMQ server and return connection and channel
const connectRabbitMQ = async () => {
  // If connection and channel are already present, return them
  if (connection && channel) return { connection, channel };

  // Try to connect to RabbitMQ server and create a channel
  try {
    // Connect to RabbitMQ server
    connection = await amqp.connect(config.RABBITMQ_URL!);
    console.log("Connected to RabbitMQ!!");

    // Create a channel for the connection
    channel = await connection.createChannel();

    // Setup exchange for PUB/SUB
    await setupExchange(channel);

    // Return connection and channel
    return { connection, channel };
  } catch (error) {
    // If error occurs, log the error and throw it
    console.error("Failed to connect to RabbitMQ:", error);
    throw error;
  }
};

// Publish message to PUB/SUB exchange
export const publishToQueue = async (message: object) => {
  try {
    // Connect to RabbitMQ server and get channel
    const { channel } = await connectRabbitMQ();

    // Publish message to chatQueue with message as JSON string
    channel.publish("shape_updates", "", Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
  } catch (error) {
    // If error occurs, log the error
    console.error("Failed to publish message to RabbitMQ:", error);
  }
};

// Consume messages for PUB/SUB exchange
export const consumeQueue = async (
  callback: (msg: ConsumeMessage | null) => void
) => {
  try {
    // Connect to RabbitMQ server and get channel
    const { channel } = await connectRabbitMQ();

    // Assert the queue to make sure it exists
    const { queue } = await channel.assertQueue("", { exclusive: true });

    // Bind the queue to the exchange to get messages
    await channel.bindQueue(queue, "shape_updates", "");

    // Consume messages from the queue and call the callback function
    channel.consume(
      queue,
      (msg) => {
        if (msg) {
          callback(msg);
          channel.ack(msg);
        }
      },
      { noAck: false }
    );
  } catch (error) {
    // If error occurs, log the error
    console.error("Failed to consume messages from RabbitMQ:", error);
  }
};
