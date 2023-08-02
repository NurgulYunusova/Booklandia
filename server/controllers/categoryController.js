const { Category } = require("../models/Category");

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories", error });
    }
  },
  getCategoryById: async (req, res) => {
    const categoryId = req.params.id;
    try {
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category", error });
    }
  },
  createCategory: async (req, res) => {
    const { name } = req.body;
    try {
      const newCategory = await Category.create({ name });
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ message: "Failed to create category", error });
    }
  },
  updateCategory: async (req, res) => {
    const categoryId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        updatedData,
        { new: true }
      );
      if (!updatedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(400).json({ message: "Failed to update category", error });
    }
  },
  deleteCategory: async (req, res) => {
    const categoryId = req.params.id;
    try {
      const deletedCategory = await Category.findByIdAndRemove(categoryId);
      if (!deletedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete category", error });
    }
  },
};

module.exports = {
  categoryController,
};
