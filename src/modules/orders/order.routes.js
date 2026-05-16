import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import roleMiddleware from "../../middlewares/role.middleware.js";
import { create, fetchAll, updateStatus } from "./order.controller.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("ADMIN"), create);
router.get("/", authMiddleware, roleMiddleware("ADMIN"), fetchAll);
router.put(
  "/:id/status",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateStatus,
);

export default router;
