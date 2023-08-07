const { default: mongoose } = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  choices: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

const Question = new mongoose.model("Question", questionSchema);

module.exports = {
  Question,
};
