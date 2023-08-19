const express = require("express");
const { orderController } = require("../controllers/orderController");

const orderRoutes = express.Router();

orderRoutes.get("/", orderController.getAllOrders);
orderRoutes.get("/:id", orderController.getOrderByUser);
orderRoutes.post("/", orderController.createOrder);
orderRoutes.put("/:id", orderController.updateOrderById);
orderRoutes.delete("/:id", orderController.deleteOrderById);

module.exports = {
  orderRoutes,
};
