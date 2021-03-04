import React from "react";
import Quiz from "./Quiz";
import Navbar from "../Navbar/Navbar";

const Quiz1 = () => {
  return (
    <div>
      <Navbar />
      <Quiz quizName="quiz1" />
    </div>
  );
};
export default Quiz1;
