const express = require("express");
const { reviewController } = require("../controllers/reviewController");

const reviewRoutes = express.Router();

reviewRoutes.post("/:id", reviewController.createReview);
reviewRoutes.get("/:id", reviewController.getBookReviews);
reviewRoutes.delete("/:id", reviewController.deleteReview);

module.exports = {
  reviewRoutes,
};
