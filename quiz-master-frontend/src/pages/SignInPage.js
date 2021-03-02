import React, { useState, useMemo } from "react";
import LoginInForm from "../components/SignIn/LoginInForm";
import Navbar from "../components/Navbar/Navbar";
import UserContext from "../components/Services/UserContext";

const SignInPage = () => {
  const { authenticated, setAuthenticated } = useState(false);
  const value = useMemo(() => ({ authenticated, setAuthenticated }), [
    authenticated,
    setAuthenticated,
  ]);
  return (
    <div>
      <UserContext.Provider value={value}>
        <Navbar />
      </UserContext.Provider>
      <LoginInForm />
    </div>
  );
};
export default SignInPage;
