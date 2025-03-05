import { config } from "envs/config";
import amqp, { Connection, Channel, ConsumeMessage } from "amqplib";

// Define connection and channel variables as null
let connection: Connection | null = null;
let channel: Channel | null = null;

// Add exchange setup
const setupExchange = async (channel: Channel) => {
  // Assert exchange and queue
  await channel.assertExchange("shape_updates", "fanout", { durable: true });

  // Assert queue and bind it to exchange
  await channel.assertQueue("chatQueue", { durable: true });

  // Bind queue to exchange
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

    // Create a channel
    channel = await connection.createChannel();

    // Add exchange setup
    await setupExchange(channel);

    // Return connection and channel
    return { connection, channel };
  } catch (error) {
    // If error occurs, log the error and throw it
    console.error("Failed to connect to RabbitMQ:", error);
    throw error;
  }
};

// Publish message to chatQueue with the message as JSON string
export const publishToQueue = async (message: object) => {
  try {
    // Connect to RabbitMQ server and get channel
    const { channel } = await connectRabbitMQ();

    // Publish message to chatQueue with the message as JSON string
    channel.publish("shape_updates", "", Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
    console.log("Message published to RabbitMQ!!");
  } catch (error) {
    // If error occurs, log the error
    console.error("Failed to publish message to RabbitMQ:", error);
  }
};

// Consume messages from chatQueue and call callback function
export const consumeQueue = async (
  callback: (msg: ConsumeMessage | null) => void
) => {
  try {
    // Connect to RabbitMQ server and get channel
    const { channel } = await connectRabbitMQ();

    // Assert queue and bind it to chatQueue
    const { queue } = await channel.assertQueue("", { exclusive: true });

    // Bind queue to exchange
    await channel.bindQueue(queue, "shape_updates", "");

    // Consume messages from chatQueue and call callback function
    channel.consume(
      queue,
      (msg) => {
        // If message is present, call the callback function
        if (msg) {
          callback(msg);
          channel.ack(msg);
        }
      },
      { noAck: false } // Acknowledge the message after consuming it from the queue
    );
    console.log("Consuming messages from RabbitMQ!!");
  } catch (error) {
    // If error occurs, log the error
    console.error("Failed to consume messages from RabbitMQ:", error);
  }
};
