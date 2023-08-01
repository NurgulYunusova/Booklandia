const { default: mongoose } = require("mongoose");

function baseUrl(v) {
  return "http://localhost:8080/" + v;
}

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
      },
    ],
    about: {
      type: String,
      required: true,
    },
    image: { type: String, get: baseUrl },
  },
  { timestamps: true }
);

const Author = new mongoose.model("Author", authorSchema);

module.exports = {
  Author,
};
