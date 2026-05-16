import asyncHandler from "../../middlewares/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./product.service.js";

/**
 * Create Product.
 * @param req Request
 * @param res Response
 * @return JSON
 */
export const createProducts = asyncHandler(async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json(
    new ApiResponse(201, "Product created successfully!", {
      product,
    }),
  );
});

/**
 * Get All Product.
 * @param req Request
 * @param res Response
 * @return JSON
 */
export const getAllProducts = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const search = Number(req.query.search) || "";
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  const sort = req.query.sort || "desc";

  const result = await getProducts({
    page,
    limit,
    search,
    minPrice,
    maxPrice,
    sort,
  });

  res.status(200).json(
    new ApiResponse(200, "The Fetch All product successfully!", {
      ...result,
    }),
  );
});

/**
 * Get Single Product By Id.
 * @param req Request
 * @param res Response
 * @return JSON
 */
export const fetchProductById = asyncHandler(async (req, res) => {
  const product = await getProductById(req.params.id);
  if (!product) {
    res.status(404).json(new ApiResponse(404, "Product not found!"));
  }
  res.status(200).json(new ApiResponse(200, "Product Fetched successfully!"));
});

/**
 * Update Single Product.
 * @param req Request
 * @param res Response
 * @return JSON
 */
export const updateProducts = asyncHandler(async (req, res) => {
  const product = await updateProduct(req.params.id, req.body);
  res.status(200).json(
    new ApiResponse(200, "Product updated successfully!", {
      product,
    }),
  );
});

/**
 * Delete Single Product.
 * @param req Request
 * @param res Response
 * @return JSON
 */
export const deleteProducts = asyncHandler(async (req, res) => {
  await deleteProduct(req.params.id);
  res.status(200).json(new ApiResponse(200, "Product deleted successfully!"));
});
