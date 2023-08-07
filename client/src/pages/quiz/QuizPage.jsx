import { useEffect, useState } from "react";
import axios from "axios";
import "./quiz.scss";

function QuizPage() {
  const [quiz, setQuiz] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  console.log(quiz);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/quiz")
      .then((res) => setQuiz(res.data));
  }, []);

  const questions = quiz.length > 0 ? quiz[0].questions : [];

  console.log(questions);

  const totalQuestions = quiz.length > 0 ? quiz[0].totalQuestions : 0;

  if (questions.length === 0 || activeQuestion >= totalQuestions) {
    return <div>Loading or No questions available</div>;
  }

  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <>
      <div className="quiz">
        <div className="quizContainer">
          {!showResult ? (
            <div>
              <div>
                <span className="activeQuestionNo">
                  {addLeadingZero(activeQuestion + 1)}
                </span>
                <span className="totalQuestion">
                  /{addLeadingZero(questions.length)}
                </span>
              </div>
              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={
                      selectedAnswerIndex === index ? "selectedAnswer" : null
                    }
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flexRight">
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          ) : (
            <div className="result">
              <h3>Result</h3>
              <p>
                Total Question: <span>{questions.length}</span>
              </p>
              <p>
                Total Score:<span> {result.score}</span>
              </p>
              <p>
                Correct Answers:<span> {result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers:<span> {result.wrongAnswers}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuizPage;
