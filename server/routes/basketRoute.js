const express = require("express");
const { basketController } = require("../controllers/basketController");

const basketRoutes = express.Router();

basketRoutes.get("/:id", basketController.getBasketByUser);
basketRoutes.post("/", basketController.addToBasket);
basketRoutes.put("/:id", basketController.updateBasket);
basketRoutes.delete("/:id", basketController.removeFromBasket);

module.exports = {
  basketRoutes,
};
