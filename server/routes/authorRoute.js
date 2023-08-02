const express = require("express");
const { authorController } = require("../controllers/authorController");

const authorRoutes = express.Router();

authorRoutes.get("/", authorController.getAllAuthors);
authorRoutes.get("/:id", authorController.getAuthorById);
authorRoutes.post("/", authorController.createAuthor);
authorRoutes.put("/:id", authorController.updateAuthor);
authorRoutes.delete("/:id", authorController.deleteAuthor);

module.exports = {
  authorRoutes,
};
