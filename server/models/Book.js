const { default: mongoose } = require("mongoose");

function baseUrl(v) {
  return "http://localhost:8080/" + v;
}

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    ratings: [
      {
        type: Number,
        required: false,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    isbn: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        required: false,
      },
    ],
    image: { type: String, get: baseUrl, required: true },
  },
  { timestamps: true }
);

const Book = new mongoose.model("Book", bookSchema);

module.exports = {
  Book,
};
