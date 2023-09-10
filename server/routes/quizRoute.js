const express = require("express");
const { quizController } = require("../controllers/quizController");

const quizRoutes = express.Router();

quizRoutes.get("/", quizController.getAllQuizzes);
quizRoutes.get("/:id", quizController.getQuizById);
quizRoutes.post("/", quizController.createQuiz);
quizRoutes.put("/:id", quizController.updateQuiz);
quizRoutes.delete("/:id", quizController.deleteQuiz);

module.exports = {
  quizRoutes,
};
