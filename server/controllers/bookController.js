const { Book } = require("../models/Book");
const { Category } = require("../models/Category");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find().populate("reviews");
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch books", error });
    }
  },
  getBookById: async (req, res) => {
    const bookId = req.params.id;
    try {
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      // Calculate average rating
      const totalRatings = book.ratings.length;
      const sumRatings = book.ratings.reduce(
        (total, rating) => total + rating,
        0
      );
      const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

      // Add average rating to the book object
      const bookWithAverageRating = {
        ...book.toObject(),
        averageRating,
      };

      res.status(200).json(bookWithAverageRating);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch book", error });
    }
  },
  createBook: async (req, res) => {
    const {
      name,
      author,
      averageRating,
      description,
      category,
      isbn,
      pages,
      language,
      reviews,
      image,
    } = req.body;
    try {
      const newBook = await Book.create({
        name,
        author,
        averageRating,
        description,
        category,
        isbn,
        pages,
        language,
        reviews,
        image,
      });
      res.status(201).json(newBook);
    } catch (error) {
      res.status(400).json({ message: "Failed to create book", error });
    }
  },
  updateBook: async (req, res) => {
    const bookId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedBook = await Book.findByIdAndUpdate(bookId, updatedData, {
        new: true,
      });
      if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(400).json({ message: "Failed to update book", error });
    }
  },
  deleteBook: async (req, res) => {
    const bookId = req.params.id;
    try {
      const deletedBook = await Book.findByIdAndRemove(bookId);
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete book", error });
    }
  },
};

module.exports = {
  bookController,
};
