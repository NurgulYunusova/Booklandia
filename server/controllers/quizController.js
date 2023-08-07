const { Quiz } = require("../models/Quiz");

const quizController = {
  getAllQuizzes: async (req, res) => {
    try {
      const quizzes = await Quiz.find().populate("questions");
      res.status(200).json(quizzes);
    } catch (error) {
      res.status(500).json({ message: "Failed to get quizzes", error });
    }
  },
  getQuizById: async (req, res) => {
    try {
      const { quizId } = req.params;

      const quiz = await Quiz.findById(quizId).populate("questions");
      if (!quiz) {
        return res.status(404).json({ message: "Quiz not found" });
      }

      res.status(200).json(quiz);
    } catch (error) {
      res.status(500).json({ message: "Failed to get quiz", error });
    }
  },
  createQuiz: async (req, res) => {
    try {
      const { topic, totalQuestions, perQuestionScore, questions } = req.body;

      const newQuiz = new Quiz({
        topic,
        totalQuestions,
        perQuestionScore,
        questions,
      });

      await newQuiz.save();

      res
        .status(201)
        .json({ message: "Quiz created successfully", quiz: newQuiz });
    } catch (error) {
      res.status(400).json({ message: "Failed to create quiz", error });
    }
  },
  updateQuiz: async (req, res) => {
    try {
      const { quizId } = req.params;
      const { topic, totalQuestions, perQuestionScore, questions } = req.body;

      const existingQuiz = await Quiz.findById(quizId);
      if (!existingQuiz) {
        return res.status(404).json({ message: "Quiz not found" });
      }

      existingQuiz.topic = topic;
      existingQuiz.totalQuestions = totalQuestions;
      existingQuiz.perQuestionScore = perQuestionScore;
      existingQuiz.questions = questions;

      await existingQuiz.save();

      res
        .status(200)
        .json({ message: "Quiz updated successfully", quiz: existingQuiz });
    } catch (error) {
      res.status(400).json({ message: "Failed to update quiz", error });
    }
  },
  deleteQuiz: async (req, res) => {
    try {
      const { quizId } = req.params;

      const existingQuiz = await Quiz.findById(quizId);
      if (!existingQuiz) {
        return res.status(404).json({ message: "Quiz not found" });
      }

      await existingQuiz.remove();

      res.status(200).json({ message: "Quiz deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete quiz", error });
    }
  },
};

module.exports = {
  quizController,
};
