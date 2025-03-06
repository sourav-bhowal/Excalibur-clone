import express, { Application } from "express";
import cors from "cors";
import { signUpUser, loginUser } from "./controllers/user.controller.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import {
  createRoom,
  getRoomBySlug,
  getRoomChats,
} from "./controllers/room.controller.js";
import { config } from "envs/config";

// Create an express app
const app: Application = express();

// Use of express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

// Routes
app.post("/signup", signUpUser);
app.post("/login", loginUser);
app.post("/room/create", authMiddleware, createRoom);
app.get("/room/chats/:roomId", authMiddleware, getRoomChats);
app.get("/room/:slug", authMiddleware, getRoomBySlug);

// Start the server
app.listen(config.HTTP_PORT, () => {
  console.log("HTTP Server is running on port " + config.HTTP_PORT);
});
