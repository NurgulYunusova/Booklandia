const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const Category = new mongoose.model("Category", categorySchema);

module.exports = {
  Category,
};
