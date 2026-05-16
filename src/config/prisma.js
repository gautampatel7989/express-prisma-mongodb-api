import "dotenv/config";
import { PrismaClient } from "../generated/prisma/index.js";
import ApiError from "../utils/ApiError.js";

if (!process.env.DATABASE_URL) {
  throw new ApiError(500, "DATABASE_URL is missing from the environment.");
}

export const prisma = new PrismaClient();
