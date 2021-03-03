import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Quiz from "../components/Quiz/Quiz";

const QuizPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Take A quiz</h1>
      <Quiz />
    </div>
  );
};
export default QuizPage;
