const { Author } = require("../models/Author");

const authorController = {
  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch authors", error });
    }
  },
  getAuthorById: async (req, res) => {
    const authorId = req.params.id;
    try {
      const author = await Author.findById(authorId);
      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch author", error });
    }
  },
  createAuthor: async (req, res) => {
    const { name, about } = req.body;
    try {
      const newAuthor = await Author.create({ name, about });
      res.status(201).json(newAuthor);
    } catch (error) {
      res.status(400).json({ message: "Failed to create author", error });
    }
  },
  updateAuthor: async (req, res) => {
    const authorId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedAuthor = await Author.findByIdAndUpdate(
        authorId,
        updatedData,
        { new: true }
      );
      if (!updatedAuthor) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.status(200).json(updatedAuthor);
    } catch (error) {
      res.status(400).json({ message: "Failed to update author", error });
    }
  },
  deleteAuthor: async (req, res) => {
    const authorId = req.params.id;
    try {
      const deletedAuthor = await Author.findByIdAndRemove(authorId);
      if (!deletedAuthor) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.status(200).json({ message: "Author deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete author", error });
    }
  },
};

module.exports = {
  authorController,
};
