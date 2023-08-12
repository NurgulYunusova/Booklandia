const { Wishlist } = require("../models/Wishlist");
const { User } = require("../models/User");

const wishlistController = {
  addToWishlist: async (req, res) => {
    try {
      const { userId, bookId } = req.body;

      const existingWishlistEntry = await Wishlist.findOne({
        user: userId,
        book: bookId,
      });

      if (existingWishlistEntry) {
        return res.status(400).json({ message: "Item already in wishlist" });
      }

      const wishlist = new Wishlist({
        user: userId,
        book: bookId,
      });

      await wishlist.save();

      await User.findByIdAndUpdate(
        userId,
        { $push: { wishlist: wishlist._id } },
        { new: true }
      );

      res.status(201).json({ message: "Item added to wishlist" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getWishlistByUser: async (req, res) => {
    try {
      const userId = req.params.id;

      const wishlist = await Wishlist.find({ user: userId })
        .populate("book", "title author")
        .select("-user");

      res.status(200).json({ wishlist });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  removeFromWishlist: async (req, res) => {
    try {
      const { userId, bookId } = req.body;

      const wishlistEntry = await Wishlist.findOne({ user: userId });

      if (!wishlistEntry) {
        return res.status(404).json({ message: "Wishlist not found" });
      }

      const bookIndex = wishlistEntry.book.indexOf(bookId);

      if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found in wishlist" });
      }

      wishlistEntry.book.splice(bookIndex, 1);
      await wishlistEntry.save();

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $pull: { wishlist: bookId } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Book removed from wishlist" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

module.exports = {
  wishlistController,
};
