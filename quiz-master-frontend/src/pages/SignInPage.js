import React, { useState } from "react";
import LoginInForm from "../components/SignIn/LoginInForm";
import Navbar from "../components/Navbar/Navbar";
import UserContext from "../components/Services/UserContext";

const SignInPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [permission, setPermission] = useState("");
  return (
    <div>
      <UserContext.Provider
        value={{ authenticated, setAuthenticated, permission, setPermission }}
      >
        <Navbar />
      </UserContext.Provider>
      <LoginInForm />
    </div>
  );
};
export default SignInPage;
