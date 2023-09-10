const express = require("express");
const { orderController } = require("../controllers/orderController");
const { protect, admin } = require("../middleware/authMiddleware.js");

const orderRoutes = express.Router();

orderRoutes.get("/", protect, admin, orderController.getAllOrders);
orderRoutes.get("/:id", orderController.getOrderByUser);
orderRoutes.post("/", orderController.createOrder);
orderRoutes.put("/:id", orderController.updateOrderById);
orderRoutes.delete("/:id", orderController.deleteOrderById);

module.exports = {
  orderRoutes,
};
