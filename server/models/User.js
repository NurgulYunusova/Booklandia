const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: false,
  },
  code: {
    type: String,
    required: true,
  },
  codeExpire: {
    type: Date,
    required: true,
  },
  forgotToken: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  codeCounter: {
    type: Number,
    default: 3,
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wishlist",
      required: false,
    },
  ],
});

const User = new mongoose.model("User", userSchema);

module.exports = {
  User,
};
