import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import logger from "./utils/logger.js";
import authRoute from "./modules/auth/auth.routes.js";
import userRoute from "./modules/users/user.routes.js";
import productRoute from "./modules/products/product.routes.js";
import orderRoutes from "./modules/orders/order.routes.js";

import errorHandler from "./middlewares/error.middleware.js";

const PORT = process.env.PORT;
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too Many Request!",
});

/**
 * Third Party Middlewares
 */
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(limiter);
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoutes);
app.use("/health", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "The Application is live!",
  });
});
app.use("/test-api", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Test API is working fine!",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

app.listen(PORT, () =>
  logger.info(`The server is running on http://localhost:${PORT}`),
);
