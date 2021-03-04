import React, { useState, useEffect } from "react";
import QuizQuestions from "./QuizQuestions";

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  let mydata = JSON.parse(quizData);

  useEffect(() => {
    return fetch("http://localhost:8080/quiz", {
      method: "Get",
      dataType: "JSON",
      headers: {
        quizname: "questions",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuizData(JSON.stringify(data));
        console.log(data);
      });
  });
  return (
    <div>
      {mydata ? (
        <>
          <QuizQuestions data={mydata[0]} />
          <QuizQuestions data={mydata[1]} />
          <QuizQuestions data={mydata[2]} />
          <QuizQuestions data={mydata[3]} />
          <QuizQuestions data={mydata[4]} />
          <QuizQuestions data={mydata[5]} />
          <QuizQuestions data={mydata[6]} />
          <QuizQuestions data={mydata[7]} />
          <QuizQuestions data={mydata[8]} />
          <QuizQuestions data={mydata[9]} />
        </>
      ) : (
        <h1>No Quiz Found</h1>
      )}
    </div>
  );
};
export default Quiz;
