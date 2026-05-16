import asyncHandler from "../../middlewares/asyncHandler.js";
import { prisma } from "../../config/prisma.js";
import ApiResponse from "../../utils/ApiResponse.js";

import {
  createOrder,
  getAllOrders,
  updateOrderStatus,
} from "./order.service.js";

const create = asyncHandler(async (req, res) => {
  const order = await createOrder(req.user.id, req.body.items);
  res.status(201).json(
    new ApiResponse(201, "Order created successfully!", {
      order,
    }),
  );
});

const fetchAll = asyncHandler(async (req, res) => {
  const orders = await getAllOrders(req.user.id);
  res.status(200).json(
    new ApiResponse(200, "Order Fetched successfully!", {
      orders,
    }),
  );
});

const updateStatus = asyncHandler(async (req, res) => {
  const order = await updateOrderStatus(req.params.id, req.body.status);
  res.status(200).json(
    new ApiResponse(200, "Order status updated!", {
      order,
    }),
  );
});

export { create, fetchAll, updateStatus };
