const { default: mongoose } = require("mongoose");

function baseUrl(v) {
  return process.env.VERCEL_URL + v;
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
    price: {
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
