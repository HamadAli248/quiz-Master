import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import UserContext from "./components/Services/UserContext";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [permission, setPermission] = useState("");

  return (
    <div className="demo-big-content">
      <div className="page-content">
        <UserContext.Provider
          value={{ authenticated, setAuthenticated, permission, setPermission }}
        >
          <Main />
        </UserContext.Provider>
      </div>
    </div>
  );
}
export default App;
