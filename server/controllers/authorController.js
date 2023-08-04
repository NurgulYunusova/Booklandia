const { Author } = require("../models/Author");
const { v4: uuidv4 } = require("uuid");

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
    try {
      let file = req.files.photo;
      const { name, about } = req.body;

      let fileExt = file.name.substring(file.name.lastIndexOf("."));

      let path = uuidv4() + fileExt;
      console.log(path);

      file.mv("authorImages/" + path, function (err) {
        if (!err) res.send("Success!");
        else res.status(500).json(err);
      });

      let author = new Author({
        name: name,
        about: about,
        image: path,
      });

      author.save();

      res.json(author);
    } catch (error) {}
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
