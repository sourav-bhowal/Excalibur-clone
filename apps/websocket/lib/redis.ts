import { config } from "envs/config";
import { Redis } from "ioredis";

// Redis connection string
const redisUrl = config.REDIS_URL;

// If the connection string is not defined, log an error and exit
if (!redisUrl) {
  throw new Error("REDIS_URL environment variable is not set");
}

// Initialize Redis Client
export const redis = new Redis(redisUrl);

redis.on("error", (err) => {
  console.error("Redis error:", err);
});
