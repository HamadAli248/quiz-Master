import React, { useState } from "react";

const CorrectAnswerComponent = (data) => {
  const [question] = useState(data.data.question);
  const [correctAnswer] = useState(data.data.correctAnswer);
  const [incorrectAnswer1] = useState(data.data.incorrectAnswer1);
  const [incorrectAnswer2] = useState(data.data.incorrectAnswer2);
  const [incorrectAnswer3] = useState(data.data.incorrectAnswer3);
  const [incorrectAnswer4] = useState(data.data.incorrectAnswer4);

  return (
    <div>
      <div>
        <h1>{question}</h1>
      </div>
      <div>
        <h3>Correct Answer:</h3>
        <p>{correctAnswer}</p>
      </div>
      <div>
        <h3>IncorrectAnswer:</h3>
        <p>{incorrectAnswer1}</p>
        <p>{incorrectAnswer2}</p>
        <p>{incorrectAnswer3}</p>
        <p>{incorrectAnswer4}</p>
      </div>
      <div></div>
    </div>
  );
};
export default CorrectAnswerComponent;
