export const config = {
  HTTP_BACKEND_URL: process.env.HTTP_BACKEND_URL || "http://excalibur_backend:3002/api",
  WS_BACKEND_URL: process.env.WS_BACKEND_URL || "ws://excalibur_ws:3003",
  AUTH_SECRET: process.env.AUTH_SECRET || "secret",
};
