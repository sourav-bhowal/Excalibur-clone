export const config = {
  HTTP_BACKEND_URL: process.env.HTTP_BACKEND_URL || "http://45.79.125.76:3002/api",
  WS_BACKEND_URL: process.env.WS_BACKEND_URL || "ws://45.79.125.76:3003",
  AUTH_SECRET: process.env.AUTH_SECRET || "secret",
};
