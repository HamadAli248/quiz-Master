import React, { useState } from "react";

const QuizQuestions = (data) => {
  const [question] = useState(data.data.question);
  const [correctAnswer] = useState(data.data.correctAnswer);
  const [incorrectAnswer1] = useState(data.data.incorrectAnswer1);
  const [incorrectAnswer2] = useState(data.data.incorrectAnswer2);
  const [incorrectAnswer3] = useState(data.data.incorrectAnswer3);
  const [incorrectAnswer4] = useState(data.data.incorrectAnswer4);

  let answers = {
    correctAnswer,
    incorrectAnswer1,
    incorrectAnswer2,
    incorrectAnswer3,
    incorrectAnswer4,
  };

  let list = shuffleArray(answers);

  console.log(list);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
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
