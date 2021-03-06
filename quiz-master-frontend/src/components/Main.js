import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import QuizPage from "../pages/QuizPage";
import AdminPage from "../pages/AdminPage";
import ViewCorrectAnswers from "../pages/ViewCorrectAnswerPages";
import Quiz1 from "./Quiz/Quiz1";
import Quiz2 from "./Quiz/Quiz2";
import Quiz3 from "./Quiz/Quiz3";
import ViewCorrectAnswersQuiz1 from "./CorrectAnswersPages/Quiz1";
import ViewCorrectAnswersQuiz2 from "./CorrectAnswersPages/Quiz2";
import ViewCorrectAnswersQuiz3 from "./CorrectAnswersPages/Quiz3";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={SignInPage} />
    <Route exact path="/quiz" component={QuizPage} />
    <Route exact path="/admin" component={AdminPage} />
    <Route exact path="/viewcorrectanswers" component={ViewCorrectAnswers} />
    <Route exact path="/quiz1" component={Quiz1} />
    <Route exact path="/quiz2" component={Quiz2} />
    <Route exact path="/quiz3" component={Quiz3} />
    <Route
      exact
      path="/viewcorrectanswersquiz1"
      component={ViewCorrectAnswersQuiz1}
    />
    <Route
      exact
      path="/viewcorrectanswersquiz2"
      component={ViewCorrectAnswersQuiz2}
    />
    <Route
      exact
      path="/viewcorrectanswersquiz3"
      component={ViewCorrectAnswersQuiz3}
    />
  </Switch>
);
export default Main;
