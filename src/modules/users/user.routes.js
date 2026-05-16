import express from "express";
import { getMe, adminOnly } from "./user.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import roleMiddleware from "../../middlewares/role.middleware.js";
const router = express.Router();

router.get("/me", authMiddleware, getMe);
router.get("/admin", authMiddleware, roleMiddleware("ADMIN"), adminOnly);

export default router;
