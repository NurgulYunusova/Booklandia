const { default: mongoose } = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  },
  { timestamps: true }
);

const Wishlist = new mongoose.model("Wishlist", wishlistSchema);

module.exports = {
  Wishlist,
};
