const express = require("express");
const { questionController } = require("../controllers/questionController");

const questionRoutes = express.Router();

questionRoutes.get("/", questionController.getAllQuestions);
questionRoutes.get("/:id", questionController.getQuestionById);
questionRoutes.post("/", questionController.createQuestion);
questionRoutes.put("/:id", questionController.updateQuestion);
questionRoutes.delete("/:id", questionController.deleteQuestion);

module.exports = {
  questionRoutes,
};
