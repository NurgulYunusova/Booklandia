const { Basket } = require("../models/Basket");
const { default: mongoose } = require("mongoose");

const basketController = {
  addToBasket: async (req, res) => {
    try {
      const { userId, bookId, quantity } = req.body;

      const existingBasketEntry = await Basket.findOne({
        user: userId,
        book: bookId,
        quantity: quantity,
      });

      if (existingBasketEntry) {
        return res.status(400).json({ message: "Book already in basket" });
      }

      const basket = new Basket({
        user: userId,
        book: bookId,
        quantity: quantity,
      });

      await basket.save();

      res.status(201).json({ message: "Book added to basket" });
    } catch (error) {
      res.status(500).json({ message: "Error adding book to basket" });
    }
  },
  getBasketByUser: async (req, res) => {
    try {
      const userId = req.params.id;

      const basket = await Basket.find({ user: userId })
        .populate("book", "name image createdAt price")
        .select("-user");

      res.status(200).json({ basket });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  removeFromBasket: async (req, res) => {
    try {
      const bookId = req.params.id;
      const { userId } = req.body;

      if (
        !mongoose.Types.ObjectId.isValid(userId) ||
        !mongoose.Types.ObjectId.isValid(bookId)
      ) {
        return res
          .status(400)
          .json({ message: "Invalid userId or bookId format" });
      }

      const removedBook = await Basket.findOneAndDelete({
        user: userId,
        book: bookId,
      });

      if (removedBook) {
        res.status(200).json({ message: "Book removed from basket" });
      } else {
        res.status(404).json({ message: "Book not found in basket" });
      }
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: "Invalid userId or bookId format" });
      } else {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
    }
  },
};

module.exports = {
  basketController,
};
