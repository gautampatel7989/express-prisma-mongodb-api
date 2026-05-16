import { prisma } from "../../config/prisma.js";
import ApiError from "../../utils/ApiError.js";

const createOrder = async (userId, items) => {
  return prisma.$transaction(async (tx) => {
    let totalPrice = 0;
    const orderItemData = [];

    for (const item of items) {
      const product = await tx.product.findUnique({
        where: {
          id: item.productId,
        },
      });

      if (!product) {
        throw new ApiError(404, "Product not found!");
      }

      if (product.stock < item.quantity) {
        throw new ApiError(422, `${product.title} out of stock!`);
      }

      totalPrice += product.price * item.quantity;

      orderItemData.push({
        productId: product.id,
        quantity: item.quantity,
        price: product.price,
      });

      await tx.product.update({
        where: {
          id: product.id,
        },
        data: {
          stock: {
            decrement: item.quantity,
          },
        },
      });
    }
    const order = await tx.order.create({
      data: {
        userId,
        totalPrice,
        items: {
          create: orderItemData,
        },
      },
      include: {
        items: true,
      },
    });
    return order;
  });
};

const getAllOrders = async (userId) => {
  return prisma.order.findMany({
    where: {
      userId: userId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};

const updateOrderStatus = async (orderId, orderStatus) => {
  return await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      status: orderStatus,
    },
  });
};

export { createOrder, getAllOrders, updateOrderStatus };
