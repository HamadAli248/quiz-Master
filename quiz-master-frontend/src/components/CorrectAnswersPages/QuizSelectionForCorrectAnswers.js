import React from "react";
import QuizSelectionCard from "../Quiz/QuizSelectionCard";

const QuizSelectionForCorrectAnswers = () => (
  <div>
    <h2>Quiz Selections</h2>
    <div>
      <QuizSelectionCard
        Title="Quiz 1"
        about="general knowledge"
        quizLink="/viewcorrectanswersquiz1"
        cta="View correct Answers"
      />
      <QuizSelectionCard
        Title="Quiz 2"
        about="general knowledge"
        quizLink="/viewcorrectanswersquiz2"
        cta="View correct Answers"
      />
      <QuizSelectionCard
        Title="Quiz 3"
        about="general knowledge"
        quizLink="/viewcorrectanswersquiz3"
        cta="View correct Answers"
      />
    </div>
  </div>
);
export default QuizSelectionForCorrectAnswers;
