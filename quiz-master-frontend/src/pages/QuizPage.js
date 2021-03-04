import React from "react";
import Navbar from "../components/Navbar/Navbar";
import QuizSelectionPage from "../components/Quiz/QuizSelectionPage";

const QuizPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Take A quiz</h1>
      <QuizSelectionPage />
    </div>
  );
};
export default QuizPage;
