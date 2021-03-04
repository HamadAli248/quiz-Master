import React, { useState, useEffect } from "react";
import QuizQuestions from "./QuizQuestions";

export default function Quiz(props) {
  const [quizData, setQuizData] = useState(null);
  let mydata = JSON.parse(quizData);
  useEffect(() => {
    return fetch("http://localhost:8080/quiz", {
      method: "Get",
      dataType: "JSON",
      headers: {
        quizname: props.quizName,
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
          <QuizQuestions data={mydata} />
        </>
      ) : (
        <h1>No Quiz Found</h1>
      )}
    </div>
  );
}
