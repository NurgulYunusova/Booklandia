const { Author } = require("../models/Author");
const { Book } = require("../models/Book");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find().populate("author category");
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

      const totalRatings = book.ratings.length;
      const sumRatings = book.ratings.reduce(
        (total, rating) => total + rating,
        0
      );
      const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

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
      const { name, author, description, category, isbn, pages, language } =
        req.body;

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
