import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "../Feed.styles";

function InputBox({ event, handleAddComment }) {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleSubmit = () => {
    const username = user.userName;
    const eventId = event.id;
    const commentDTO = {
      description: input,
      type: "text",
      eventId: eventId,
      username
    };
    setInput("");
    handleAddComment(commentDTO);
  };

  return (
    <Grid container item direction="column" className={classes.inputBox}>
      <Grid
        container
        item
        direction="row"
        alignItems="center"
        className={classes.inputHeader}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography className={classes.submitPostText}>
          Submit a post
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.textFieldContainer}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={classes.inputTextField}
          placeholder="Write something..."
          multiline
          rows={3}
          variant="filled"
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify="space-between"
        direction="row"
        className={classes.inputActionsContainer}
      >
        <Button size="small" color="secondary" className={classes.actionBtn}>
          Upload Photo
        </Button>
        <Button
          size="small"
          color="secondary"
          disableElevation
          disableFocusRipple
          disabled={input ? false : true}
          className={classes.actionBtn}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default InputBox;
