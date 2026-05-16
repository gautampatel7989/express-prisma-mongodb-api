import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter valid email!"),
  password: z.string().min(6, "The password should at least 6 character long"),
});

export const registerSchema = z.object({
  name: z.string().min(3, "The name field is required!"),
  email: z.string().email("Please enter valid email!"),
  password: z.string().min(6, "The password should at least 6 character long"),
  role: z.string(),
});
