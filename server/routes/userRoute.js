const express = require("express");
const { userController } = require("../controllers/userController");
// import { protect, admin } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

// userRoutes.get("/", userController.getAllCategories);
// userRoutes.get("/:id", userController.getUserProfile);
userRoutes.post("/register", userController.registerUser);
userRoutes.post("/confirm", userController.confirmUser);
userRoutes.post("/login", userController.loginUser);
// userRoutes.put("/:id", userController.updateCategory);
// userRoutes.delete("/:id", userController.deleteCategory);

// userRoutes.route("/").post(registerUser).get(protect, admin, getUsers);
// userRoutes.post("/auth", authUser);
// userRoutes.post("/logout", logoutUser);
// userRoutes
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);
// userRoutes
//   .route("/:id")
//   .delete(protect, admin, deleteUser)
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser);

module.exports = {
  userRoutes,
};
