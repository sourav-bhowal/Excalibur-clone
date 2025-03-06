import { config as conf } from "dotenv";

// Load the environment variables from the .env file
conf({
  path: "../../.env",
});

// Define the configuration object
const _config = {
  JWT_SECRET: process.env.JWT_SECRET || "secret",
  RABBITMQ_URL: process.env.RABBITMQ_URL,
  HTTP_BACKEND_URL: process.env.HTTP_BACKEND_URL || "http://excalibur_backend.souravbhowal.site",
  WS_BACKEND_URL: process.env.WS_BACKEND_URL || "ws://excalibur_ws.souravbhowal.site",
  HTTP_PORT: process.env.HTTP_PORT || 3002,
  WS_PORT: process.env.WS_PORT || 3003,
};

// Freeze the configuration object to prevent modification
export const config = Object.freeze(_config);
