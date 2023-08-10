const express = require("express");
const { userController } = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware.js");

const userRoutes = express.Router();

userRoutes.post("/profile", protect, userController.getUserProfile);
userRoutes.post("/register", userController.registerUser);
userRoutes.post("/confirm", userController.confirmUser);
userRoutes.post("/login", userController.loginUser);
userRoutes.post("/logout", userController.logoutUser);
userRoutes.put("/profile", protect, userController.updateUserProfile);

// Admin routes
userRoutes.get("/", protect, admin, userController.getUsers);
userRoutes.get("/:id", protect, admin, userController.getUserById);
userRoutes.put("/:id", protect, admin, userController.updateUser);
userRoutes.delete("/:id", protect, admin, userController.deleteUser);

module.exports = {
  userRoutes,
};
