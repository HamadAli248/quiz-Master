import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const QuizQuestions = (data) => {
  const questions = [
    {
      questionText: data.data[0].question,
      answerOptions: [
        { answerText: data.data[0].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[0].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[0].correctAnswer, isCorrect: true },
        { answerText: data.data[0].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[0].incorrectAnswer4, isCorrect: false },
      ],
    },
    {
      questionText: data.data[1].question,
      answerOptions: [
        { answerText: data.data[1].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[1].correctAnswer, isCorrect: true },
        { answerText: data.data[1].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[1].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[1].incorrectAnswer4, isCorrect: false },
      ],
    },
    {
      questionText: data.data[2].question,
      answerOptions: [
        { answerText: data.data[2].correctAnswer, isCorrect: true },
        { answerText: data.data[2].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[2].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[2].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[2].incorrectAnswer4, isCorrect: false },
      ],
    },
    {
      questionText: data.data[3].question,
      answerOptions: [
        { answerText: data.data[3].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[3].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[3].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[3].incorrectAnswer4, isCorrect: false },
        { answerText: data.data[3].correctAnswer, isCorrect: true },
      ],
    },
    {
      questionText: data.data[4].question,
      answerOptions: [
        { answerText: data.data[4].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[4].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[4].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[4].incorrectAnswer4, isCorrect: false },
        { answerText: data.data[4].correctAnswer, isCorrect: true },
      ],
    },
    {
      questionText: data.data[5].question,
      answerOptions: [
        { answerText: data.data[5].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[5].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[5].correctAnswer, isCorrect: true },
        { answerText: data.data[5].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[5].incorrectAnswer4, isCorrect: false },
      ],
    },
    {
      questionText: data.data[6].question,
      answerOptions: [
        { answerText: data.data[6].correctAnswer, isCorrect: true },
        { answerText: data.data[6].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[6].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[6].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[6].incorrectAnswer4, isCorrect: false },
      ],
    },
    {
      questionText: data.data[7].question,
      answerOptions: [
        { answerText: data.data[7].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[7].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[7].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[7].incorrectAnswer4, isCorrect: false },
        { answerText: data.data[7].correctAnswer, isCorrect: true },
      ],
    },
    {
      questionText: data.data[8].question,
      answerOptions: [
        { answerText: data.data[8].correctAnswer, isCorrect: true },
        { answerText: data.data[8].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[8].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[8].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[8].incorrectAnswer4, isCorrect: false },
      ],
    },
    {
      questionText: data.data[9].question,
      answerOptions: [
        { answerText: data.data[9].incorrectAnswer1, isCorrect: false },
        { answerText: data.data[9].correctAnswer, isCorrect: true },
        { answerText: data.data[9].incorrectAnswer3, isCorrect: false },
        { answerText: data.data[9].incorrectAnswer2, isCorrect: false },
        { answerText: data.data[9].incorrectAnswer4, isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <div>
            <h1>
              {" "}
              You scored {score} out of {questions.length}
            </h1>
          </div>
          <div>
            <Button color="inherit">
              <Link to="/quiz">Back To Quiz selection page</Link>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <h1>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </h1>
            </div>
            <div className="question-text">
              <h2>{questions[currentQuestion].questionText}</h2>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizQuestions;
