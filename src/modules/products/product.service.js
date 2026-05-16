import { prisma } from "../../config/prisma.js";

/**
 * Create Product
 * @param {*} data
 * @returns
 */
export const createProduct = async (data) => {
  return prisma.product.create({
    data,
  });
};

/**
 * Get All Products
 * @param {*} param0
 * @returns
 */
export const getProducts = async ({
  page,
  limit,
  search,
  minPrice,
  maxPrice,
  sort,
}) => {
  const skip = (page - 1) * limit;
  const where = {
    AND: [
      search
        ? {
            OR: [
              {
                title: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                description: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {},
      minPrice
        ? {
            price: {
              gte: Number(minPrice),
            },
          }
        : {},
      maxPrice
        ? {
            price: {
              lte: Number(maxPrice),
            },
          }
        : {},
    ],
  };

  const products = await prisma.product.findMany({
    where,
    skip,
    take: limit,
    orderBy: {
      price: sort === "desc" ? "desc" : "asc",
    },
  });

  const total = await prisma.product.count({
    where,
  });

  return {
    products,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
};

/**
 * Get product by id
 * @param {*} id
 * @returns
 */
export const getProductById = async (id) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
};

/**
 * Update Product
 * @param {*} id
 * @param {*} data
 * @returns
 */
export const updateProduct = async (id, data) => {
  return prisma.product.update({
    where: {
      id,
    },
    data,
  });
};

/**
 * Delete Product
 * @param {*} id
 * @returns
 */
export const deleteProduct = async (id) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};
