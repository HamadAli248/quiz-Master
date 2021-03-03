import React, { useState } from "react";

const QuizQuestions = (data) => {
  const [question] = useState(data.data.question);
  const [correctAnswer] = useState(data.data.correctAnswer);
  const [incorrectAnswer1] = useState(data.data.incorrectAnswer1);
  const [incorrectAnswer2] = useState(data.data.incorrectAnswer2);
  const [incorrectAnswer3] = useState(data.data.incorrectAnswer3);
  const [incorrectAnswer4] = useState(data.data.incorrectAnswer4);

  return (
    <div>
      <div>{question}</div>
      <button>{correctAnswer}</button>
      <button>{incorrectAnswer1}</button>
      <button>{incorrectAnswer2}</button>
      <button>{incorrectAnswer3}</button>
      <button>{incorrectAnswer4}</button>
    </div>
  );
};
export default QuizQuestions;
