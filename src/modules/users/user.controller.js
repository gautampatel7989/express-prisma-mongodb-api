import asyncHandler from "../../middlewares/asyncHandler.js";

export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
});

export const adminOnly = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin",
  });
});
