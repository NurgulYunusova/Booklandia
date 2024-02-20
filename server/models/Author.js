const { default: mongoose } = require("mongoose");

function baseUrl(v) {
  return process.env.VERCEL_URL + v;
}

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    authorBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: false,
      },
    ],
    about: {
      type: String,
      required: true,
    },
    image: { type: String, get: baseUrl, required: true },
  },
  { timestamps: true }
);

const Author = new mongoose.model("Author", authorSchema);

module.exports = {
  Author,
};
