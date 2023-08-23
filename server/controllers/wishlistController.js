const { Wishlist } = require("../models/Wishlist");
const { default: mongoose } = require("mongoose");

const wishlistController = {
  addToWishlist: async (req, res) => {
    try {
      const { userId, bookId } = req.body;

      const existingWishlistEntry = await Wishlist.findOne({
        user: userId,
        book: bookId,
      });

      if (existingWishlistEntry) {
        return res.status(400).json({ message: "Book already in wishlist" });
      }

      const wishlist = new Wishlist({
        user: userId,
        book: bookId,
      });

      await wishlist.save();

      res.status(201).json({ message: "Book added to wishlist" });
    } catch (error) {
      res.status(500).json({ message: "Error adding book to wishlist" });
    }
  },
  getWishlistByUser: async (req, res) => {
    try {
      const userId = req.params.id;

      const wishlist = await Wishlist.find({ user: userId })
        .populate("book", "name image createdAt")
        .select("-user");

      res.status(200).json({ wishlist });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  removeFromWishlist: async (req, res) => {
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

      const removedBook = await Wishlist.findOneAndDelete({
        user: userId,
        book: bookId,
      });

      if (removedBook) {
        res.status(200).json({ message: "Book removed from wishlist" });
      } else {
        res.status(404).json({ message: "Book not found in wishlist" });
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
  wishlistController,
};
