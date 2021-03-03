import React, { useState, useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./AddQuestion.module.css";
import { UserContext } from "../Services/UserContext";

const DeleteQuizQuestions = () => {
  const [userId, setUserId] = useState("");
  const { permission } = useContext(UserContext);
  const [postState, setPostState] = useState("");

  const deleteQuizQuestion = (e) => {
    e.preventDefault();
    return fetch("http://localhost:8080/deletequizquestions", {
      method: "POST",
      dataType: "JSON",
      headers: {
        quizname: "questions",
        permission: permission,
        id: userId,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPostState(data.result);
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Delete a quiz Questions</h2>
      <form onSubmit={deleteQuizQuestion}>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Question Number"
            id="userId"
            type="number"
            required
            value={userId}
            variant="outlined"
            onChange={(e) => setUserId(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.submitWrapper} component="span">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            value="Delete Question"
          >
            Delete Question
          </Button>
        </Box>
      </form>
      <p>{postState}</p>
    </div>
  );
};
export default DeleteQuizQuestions;
