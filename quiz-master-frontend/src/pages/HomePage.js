import React, { useContext } from "react";
import UserContext from "../components/Services/UserContext";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  const { authenticated, setAuthenticated } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <h1>Welcome to Quiz Manager Application</h1>
      <h3>{authenticated ? <>Take A quiz</> : <> Please Log In</>}</h3>
    </div>
  );
};
export default HomePage;
