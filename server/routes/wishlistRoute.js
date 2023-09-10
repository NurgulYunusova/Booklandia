const express = require("express");
const { wishlistController } = require("../controllers/wishlistController");

const wishlistRoutes = express.Router();

wishlistRoutes.get("/:id", wishlistController.getWishlistByUser);
wishlistRoutes.post("/", wishlistController.addToWishlist);
wishlistRoutes.delete("/:id", wishlistController.removeFromWishlist);

module.exports = {
  wishlistRoutes,
};
