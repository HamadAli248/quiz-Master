import React, { useState, useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./AddQuestion.module.css";
import { UserContext } from "../Services/UserContext";

const ChangeUserPermission = () => {
  const [username, setUsername] = useState("");
  const [updatePermission, setupdatePermission] = useState("");
  const { permission } = useContext(UserContext);
  const [ChangeUserPermissionState, setChangeUserPermission] = useState("");

  const updateQuestion = (e) => {
    e.preventDefault();
    return fetch("http://localhost:8080/changepermission", {
      method: "POST",
      dataType: "JSON",
      headers: {
        username: username,
        permission: permission,
        updatePermission: updatePermission,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChangeUserPermission(data.result);
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Change User Permission</h2>
      <form onSubmit={updateQuestion}>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="username"
            id="username"
            type="text"
            required
            value={username}
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Update Permission Value"
            id="updatePermission"
            type="text"
            required
            value={updatePermission}
            variant="outlined"
            onChange={(e) => setupdatePermission(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.submitWrapper} component="span">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            value="Change User Permission"
          >
            Change User Permission
          </Button>
        </Box>
      </form>
      <p>{ChangeUserPermissionState}</p>
    </div>
  );
};
export default ChangeUserPermission;
