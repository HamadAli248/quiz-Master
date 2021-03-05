import React, { useContext } from "react";
import UserContext from "../Services/UserContext";
import Navbar from "../Navbar/Navbar";
import CorrectAnswer from "./CorrectAnswers";

const Quiz1 = () => {
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
            <CorrectAnswer quizname="quiz1" />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default Quiz1;
