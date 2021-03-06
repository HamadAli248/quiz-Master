import React, { useContext } from "react";
import UserContext from "../components/Services/UserContext";
import Navbar from "../components/Navbar/Navbar";
import QuizSelectionForCorrectAnswer from "../components/CorrectAnswersPages/QuizSelectionForCorrectAnswers";

const ViewCorrectAnswers = () => {
  const { permission } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <h1>Welcome View Correct Answers Page</h1>
      <h3>
        {permission === "View" || permission === "Edit" ? (
          <>You have permission to View Correct Answers </>
        ) : (
          <> You don't have permission on this page</>
        )}
      </h3>
      <div>
        {permission === "View" || permission === "Edit" ? (
          <>
            <QuizSelectionForCorrectAnswer />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default ViewCorrectAnswers;
