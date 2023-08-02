const { default: mongoose } = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    reviewBook: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ReviewBook",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Review = new mongoose.model("Review", reviewSchema);

module.exports = {
  Review,
};