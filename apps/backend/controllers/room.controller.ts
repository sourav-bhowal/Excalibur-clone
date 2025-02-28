import { Request, Response } from "express";
import { createRoomSchema } from "schemas/schema";
import { prisma } from "database/prisma";
import asyncHandler from "../utils/asyncHandler.js";


// Create a room controller
export const createRoom = asyncHandler(async (req: Request, res: Response) => {
  // Validate the request body
  const { slug } = createRoomSchema.parse(req.body);

  // Get the user ID from the request
  const userId = req.user?.id;

  // If the user ID is not present, return an error
  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized. Please log in",
    });
  }

  // Check if the room already exists
  const existingRoom = await prisma.room.findUnique({
    where: {
      slug,
    },
  });

  // If the room already exists, return an error
  if (existingRoom) {
    return res.status(400).json({
      message: "Room already exists",
    });
  }

  // Create a new room
  const room = await prisma.room.create({
    data: {
      slug,
      adminId: userId,
    },
  });

  // Send the response
  res.status(201).json({
    message: "Room created successfully",
    room,
  });
});

// Get the chats of a room controller
export const getRoomChats = asyncHandler(
  async (req: Request, res: Response) => {
    // Get the room ID from the request
    const roomId = req.params.roomId;

    // If the room ID is not present, return an error
    if (!roomId) {
      return res.status(400).json({
        message: "Room ID is required",
      });
    }

    // Get the chats of the room
    const chats = await prisma.chat.findMany({
      where: {
        roomId,
      },
      include: {
        user: true,
      },
      orderBy: {
        id: "desc",
      },
      take: 50,
    });

    // Send the response
    res.status(200).json({
      chats,
      message: "Chats retrieved successfully",
    });
  }
);

// Get the room by slug
export const getRoomBySlug = asyncHandler(
  async (req: Request, res: Response) => {
    // Get the room slug from the request
    const slug = req.params.slug;

    // If the room slug is not present, return an error
    if (!slug) {
      return res.status(400).json({
        message: "Room slug is required",
      });
    }

    // Get the room by slug
    const room = await prisma.room.findUnique({
      where: {
        slug,
      },
    });

    // If the room is not found, return an error
    if (!room) {
      return res.status(404).json({
        message: "Room not found",
      });
    }

    // Send the response
    res.status(200).json({
      room,
      message: "Room retrieved successfully",
    });
  }
);
