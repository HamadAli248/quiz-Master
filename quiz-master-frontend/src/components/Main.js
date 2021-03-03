import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import QuizPage from "../pages/QuizPage";
import AdminPage from "../pages/AdminPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={SignInPage} />
    <Route exact path="/quiz" component={QuizPage} />
    <Route exact path="/admin" component={AdminPage} />
  </Switch>
);
export default Main;
