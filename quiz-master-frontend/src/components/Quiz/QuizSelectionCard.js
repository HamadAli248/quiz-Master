import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function QuizSelectionCard(props) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.Title}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.about}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.quizLink}>
          <Button style={{ margin: "0 auto", padding: "20px" }}>
            Take The Quiz
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
