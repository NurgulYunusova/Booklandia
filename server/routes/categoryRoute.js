const express = require("express");
const { categoryController } = require("../controllers/categoryController");

const categoryRoutes = express.Router();

categoryRoutes.get("/", categoryController.getAllCategories);
categoryRoutes.get("/:id", categoryController.getCategoryById);
categoryRoutes.post("/", categoryController.createCategory);
categoryRoutes.put("/:id", categoryController.updateCategory);
categoryRoutes.delete("/:id", categoryController.deleteCategory);

module.exports = {
  categoryRoutes,
};
