import { config as conf } from "dotenv";

// Load the environment variables from the .env file
conf({
  path: "../../.env",
});

// Define the configuration object
const _config = {
  JWT_SECRET: "secret",
  RABBITMQ_URL: "amqp://sourav:s2o0u0r3av@rabbitmq:5672",
  HTTP_BACKEND_URL: "http://backend:3002/api",
  WS_BACKEND_URL: "ws://ws:3003",
  HTTP_PORT: 3002,
  WS_PORT: 3003,
};

// Freeze the configuration object to prevent modification
export const config = Object.freeze(_config);
