const { Question } = require("../models/Question");

const questionController = {
  getAllQuestions: async (req, res) => {
    try {
      const questions = await Question.find();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: "Failed to get questions", error });
    }
  },
  getQuestionById: async (req, res) => {
    try {
      const { questionId } = req.params;

      const question = await Question.findById(questionId);
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }

      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ message: "Failed to get question", error });
    }
  },
  createQuestion: async (req, res) => {
    try {
      const { question, choices, correctAnswer } = req.body;

      const newQuestion = new Question({
        question,
        choices,
        correctAnswer,
      });

      await newQuestion.save();

      res.status(201).json({
        message: "Question created successfully",
        question: newQuestion,
      });
    } catch (error) {
      res.status(400).json({ message: "Failed to create question", error });
    }
  },
  updateQuestion: async (req, res) => {
    try {
      const { questionId } = req.params;
      const { question, choices, correctAnswer } = req.body;

      const existingQuestion = await Question.findById(questionId);
      if (!existingQuestion) {
        return res.status(404).json({ message: "Question not found" });
      }

      existingQuestion.question = question;
      existingQuestion.choices = choices;
      existingQuestion.correctAnswer = correctAnswer;

      await existingQuestion.save();

      res.status(200).json({
        message: "Question updated successfully",
        question: existingQuestion,
      });
    } catch (error) {
      res.status(400).json({ message: "Failed to update question", error });
    }
  },
  deleteQuestion: async (req, res) => {
    try {
      const { questionId } = req.params;

      const existingQuestion = await Question.findById(questionId);
      if (!existingQuestion) {
        return res.status(404).json({ message: "Question not found" });
      }

      await existingQuestion.remove();

      res.status(200).json({ message: "Question deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete question", error });
    }
  },
};

module.exports = {
  questionController,
};
