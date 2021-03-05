import React, { useState, useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./AddQuestion.module.css";
import { UserContext } from "../Services/UserContext";

const AddQuestion = () => {
  const [userId, setUserId] = useState("");
  const [userQuizName, setuserQuizName] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [userCorrectAnswer, serUserCorrectAnswer] = useState("");
  const [userIncorrectAnswer1, setUserIncorrectAnswer1] = useState("");
  const [userIncorrectAnswer2, setUserIncorrectAnswer2] = useState("");
  const [userIncorrectAnswer3, setUserIncorrectAnswer3] = useState("");
  const [userIncorrectAnswer4, setUserIncorrectAnswer4] = useState("");
  const { permission } = useContext(UserContext);
  const [postState, setPostState] = useState("");

  const logAddQuestionState = (dataResult) => {
    let addQuestionState = dataResult.result;
    if (addQuestionState === "added questions successfully") {
      setPostState("added questions successfully");
    } else {
      setPostState("could not update the questions as it already exits");
    }
  };

  const addQuestion = (e) => {
    e.preventDefault();
    return fetch("http://localhost:8080/addquestions", {
      method: "POST",
      dataType: "JSON",
      headers: {
        quizname: userQuizName,
        permission: permission,
        id: userId,
        question: userQuestion,
        correctAnswer: userCorrectAnswer,
        incorrectAnswer1: userIncorrectAnswer1,
        incorrectAnswer2: userIncorrectAnswer2,
        incorrectAnswer3: userIncorrectAnswer3,
        incorrectAnswer4: userIncorrectAnswer4,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        logAddQuestionState(data);
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Add a quiz Questions</h2>
      <form onSubmit={addQuestion}>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Quiz Name"
            id="quizname"
            type="text"
            required
            value={userQuizName}
            variant="outlined"
            onChange={(e) => setuserQuizName(e.target.value)}
            className={styles.input}
          />
        </Box>
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

        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Question"
            id="userQuestion"
            type="text"
            required
            value={userQuestion}
            variant="outlined"
            onChange={(e) => setUserQuestion(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Correct Answer"
            id="userCorrectAnswer"
            type="text"
            required
            value={userCorrectAnswer}
            variant="outlined"
            onChange={(e) => serUserCorrectAnswer(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Incorrect Answer 1"
            id="userIncorrectAnswer2"
            type="text"
            required
            value={userIncorrectAnswer1}
            variant="outlined"
            onChange={(e) => setUserIncorrectAnswer1(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Incorrect Answer 2"
            id="userIncorrectAnswer2"
            type="text"
            required
            value={userIncorrectAnswer2}
            variant="outlined"
            onChange={(e) => setUserIncorrectAnswer2(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Incorrect Answer 3"
            id="userIncorrectAnswer3"
            type="text"
            required
            value={userIncorrectAnswer3}
            variant="outlined"
            onChange={(e) => setUserIncorrectAnswer3(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.textInputWrapper} component="span">
          <TextField
            label="Incorrect Answer 4"
            id="userIncorrectAnswer4"
            type="text"
            required
            value={userIncorrectAnswer4}
            variant="outlined"
            onChange={(e) => setUserIncorrectAnswer4(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box className={styles.submitWrapper} component="span">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            value="Add Question"
          >
            Add Question
          </Button>
        </Box>
      </form>
      <p>{postState}</p>
    </div>
  );
};
export default AddQuestion;
