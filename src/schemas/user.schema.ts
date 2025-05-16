import { z } from "zod";

const userLoginSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const createUserSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  email: z.string().email(),
});

export { userLoginSchema, createUserSchema };
