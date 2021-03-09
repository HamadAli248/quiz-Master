import React, { useContext } from "react";
import UserContext from "../components/Services/UserContext";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  const { authenticated } = useContext(UserContext);
  return (
    <div>
      <Navbar data-cy="header" />
      <h1 data-cy="welcome-message">Welcome to Quiz Manager Application</h1>
      <h3>{authenticated ? <>Take A quiz</> : <> Please Log In</>}</h3>
    </div>
  );
};
export default HomePage;
