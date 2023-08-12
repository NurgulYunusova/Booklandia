const { Review } = require("../models/Review");
const { Book } = require("../models/Book");
const { User } = require("../models/User");

const reviewController = {
  createReview: async (req, res) => {
    try {
      const bookId = req.params.id;
      const { rating, reviewText, user } = req.body;

      const book = await Book.findById(bookId);

      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      const review = new Review({
        rating,
        reviewText,
        book: bookId,
        user,
      });

      await review.save();

      await Book.findByIdAndUpdate(
        book,
        { $push: { reviews: review._id } },
        { new: true }
      );

      await User.findByIdAndUpdate(
        user,
        { $push: { reviews: review._id } },
        { new: true }
      );

      res.status(201).json({ message: "Review created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },
  getBookReviews: async (req, res) => {
    try {
      const bookId = req.params.id;

      const reviews = await Review.find({ book: bookId })
        .populate("user", "name profileImage") // Populates the user reference and includes only the 'username' field
        .sort("-createdAt"); // Sort reviews by creation time, you can adjust this as needed

      res.json({ reviews });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const reviewId = req.params.id;

      const review = await Review.findByIdAndRemove(reviewId);

      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }

      const bookUpdateResult = await Book.findByIdAndUpdate(review.book, {
        $pull: { reviews: review._id },
      });

      const userUpdateResult = await User.findByIdAndUpdate(review.user, {
        $pull: { reviews: review._id },
      });

      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

module.exports = {
  reviewController,
};
