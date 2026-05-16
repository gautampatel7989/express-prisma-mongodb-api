import dotenv from "dotenv";
import ApiError from "../utils/ApiError.js";
dotenv.config();

const requiredVariables = ["PORT", "DATABASE_URL", "JWT_SECRET"];

requiredVariables.forEach((key) => {
  if (!process.env[key]) {
    throw new ApiError(500, `Missing environment variable: ${key}`);
  }
});

const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default env;
