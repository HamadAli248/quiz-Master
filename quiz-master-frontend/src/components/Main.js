import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import QuizPage from "../pages/QuizPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={SignInPage} />
    <Route exact path="/quiz" component={QuizPage} />
  </Switch>
);
export default Main;
