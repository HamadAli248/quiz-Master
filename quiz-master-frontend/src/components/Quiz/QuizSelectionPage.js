import React from "react";
import QuizSelectionCard from "./QuizSelectionCard";

const QuizSelectionPage = () => (
  <div>
    <h2>Quiz Selections</h2>
    <div>
      <QuizSelectionCard
        Title="Quiz 1"
        about="general knowledge"
        quizLink="/quiz1"
      />
      <QuizSelectionCard
        Title="Quiz 2"
        about="general knowledge"
        quizLink="/quiz2"
      />
      <QuizSelectionCard
        Title="Quiz 3"
        about="general knowledge"
        quizLink="/quiz3"
      />
    </div>
  </div>
);
export default QuizSelectionPage;
