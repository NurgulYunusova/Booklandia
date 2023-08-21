const { Author } = require("../models/Author");
const { Book } = require("../models/Book");
const { Review } = require("../models/Review");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find().populate("author category");

      const booksWithAverageRating = await Promise.all(
        books.map(async (book) => {
          const reviews = await Review.find({ book: book._id });

          let totalRatings = 0;
          let sumRatings = 0;

          reviews.forEach((review) => {
            totalRatings++;
            sumRatings += review.rating;
          });

          const averageRating =
            totalRatings > 0 ? sumRatings / totalRatings : 2.5;

          return {
            ...book.toObject(),
            averageRating,
          };
        })
      );

      res.status(200).json(booksWithAverageRating);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch books", error });
    }
  },
  getBookById: async (req, res) => {
    const bookId = req.params.id;
    try {
      const book = await Book.findById(bookId).populate("author category");
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      const reviews = await Review.find({ book: bookId });

      let totalRatings = 0;
      let sumRatings = 0;

      reviews.forEach((review) => {
        totalRatings++;
        sumRatings += review.rating;
      });

      const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 2.5;

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
    try {
      let file = req.files.photo;
      const {
        name,
        author,
        description,
        category,
        isbn,
        pages,
        language,
        price,
      } = req.body;

      const uploadFile = () => {
        return new Promise((resolve, reject) => {
          const path = "bookImages/" + file.name;
          file.mv(path, function (err) {
            if (err) {
              reject(err);
            } else {
              resolve(path);
            }
          });
        });
      };

      const imagePath = await uploadFile();

      const book = new Book({
        name,
        author,
        description,
        category,
        isbn,
        pages,
        price,
        language,
        image: imagePath,
      });

      await book.save();

      await Author.findByIdAndUpdate(
        author,
        { $push: { authorBooks: book._id } },
        { new: true }
      );

      res.status(201).json({ message: "Book created successfully" });
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
