import React, { useState, useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./LogInForm.module.css";
import { UserContext } from "../Services/UserContext";
import { Redirect } from "react-router-dom";

const LoginInForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loginState, setLoginState] = useState("");
  const { authenticated, setAuthenticated } = useContext(UserContext);
  const logInUserState = (dataResult) => {
    let userState = dataResult.result;
    if (userState === "Valid User") {
      console.log("afjshjkdasb");
      setAuthenticated(true);
      console.log(authenticated);
      setRedirect(true);
    } else {
      setLoginState("Invalid username or password. Or User Does not exit");
    }
  };
  const login = (e) => {
    e.preventDefault();
    return fetch("http://localhost:8080/signin", {
      method: "POST",
      dataType: "JSON",
      headers: {
        username: username,
        password: password,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        logInUserState(data);
      });
  };
  return (
    <div className={styles.LoginInForm}>
      <h2>Login</h2>
      <form onSubmit={login}>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Username"
            id="username"
            type="text"
            required
            value={username}
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Password"
            id="Password"
            type="password"
            required
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.submitWrapper} component="span">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            value="Sign In"
          >
            Sign In
          </Button>
        </Box>
      </form>
      <p>{loginState}</p>
      {redirect ? <Redirect push to="/" /> : null}
    </div>
  );
};
export default LoginInForm;
