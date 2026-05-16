import express from "express";
import {
  createProducts,
  getAllProducts,
  fetchProductById,
  updateProducts,
  deleteProducts,
} from "./product.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import roleMiddleware from "../../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", fetchProductById);

router.post("/", authMiddleware, roleMiddleware("ADMIN"), createProducts);
router.put("/:id", authMiddleware, roleMiddleware("ADMIN"), updateProducts);
router.delete("/:id", authMiddleware, roleMiddleware("ADMIN"), deleteProducts);

export default router;
