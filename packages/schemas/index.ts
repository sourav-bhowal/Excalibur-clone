import { z } from "zod";

// Sign up schema
export const signUpUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

// Login schema
export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Create room schema
export const createRoomSchema = z.object({
  slug: z.string().min(3),
});

export type SignUpUser = z.infer<typeof signUpUserSchema>;
export type LoginUser = z.infer<typeof loginUserSchema>;
export type CreateRoom = z.infer<typeof createRoomSchema>;