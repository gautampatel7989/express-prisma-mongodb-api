import bcrypt from "bcryptjs";
import { prisma } from "../../config/prisma.js";
import { generateAccessToken } from "../../utils/generateToken.js";
import { createUser } from "./auth.service.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const register = asyncHandler(async (req, res) => {
  const user = await createUser(req.body);
  const token = generateAccessToken(user);
  res
    .status(201)
    .json(
      new ApiResponse(201, "User registered successfully", { token, user }),
    );
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }
  const token = generateAccessToken(user);

  res
    .status(200)
    .json(new ApiResponse(200, "Login successfully", { token, user }));
});
