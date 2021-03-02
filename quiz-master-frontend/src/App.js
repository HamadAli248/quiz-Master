import React, { useState, useMemo } from "react";
import "./App.css";
import Main from "./components/Main";
import UserContext from "./components/Services/UserContext";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const value = useMemo(() => ({ authenticated, setAuthenticated }), [
    authenticated,
    setAuthenticated,
  ]);
  return (
    <div className="demo-big-content">
      <div className="page-content">
        <UserContext.Provider value={value}>
          <Main />
        </UserContext.Provider>
      </div>
    </div>
  );
}
export default App;
