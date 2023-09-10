const express = require("express");
const { bookController } = require("../controllers/bookController");

const bookRoutes = express.Router();

bookRoutes.get("/", bookController.getAllBooks);
bookRoutes.get("/:id", bookController.getBookById);
bookRoutes.post("/", bookController.createBook);
bookRoutes.put("/:id", bookController.updateBook);
bookRoutes.delete("/:id", bookController.deleteBook);

module.exports = {
  bookRoutes,
};
