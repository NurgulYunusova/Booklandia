const { Order } = require("../models/Order");

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find()
        .populate("user", "username email")
        .populate("books.book", "title author");
      res.status(200).json(orders);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting orders", error: error.message });
    }
  },
  getOrderById: async (req, res) => {
    const orderId = req.params.id;
    try {
      const order = await Order.findById(orderId)
        .populate("user", "username email")
        .populate("books.book", "title author");
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting order", error: error.message });
    }
  },
  createOrder: async (req, res) => {
    try {
      const newOrderData = req.body;
      const newOrder = new Order(newOrderData);
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error creating order", error: error.message });
    }
  },
  updateOrderById: async (req, res) => {
    const orderId = req.params.id;
    const updateData = req.body;
    try {
      const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, {
        new: true,
      });
      if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(updatedOrder);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating order", error: error.message });
    }
  },
  deleteOrderById: async (req, res) => {
    const orderId = req.params.id;
    try {
      const deletedOrder = await Order.findByIdAndDelete(orderId);
      if (!deletedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting order", error: error.message });
    }
  },
};

module.exports = {
  orderController,
};
