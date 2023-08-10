const { default: mongoose } = require("mongoose");

const basketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  { timestamps: true }
);

const Basket = new mongoose.model("Basket", basketSchema);

module.exports = {
  Basket,
};
