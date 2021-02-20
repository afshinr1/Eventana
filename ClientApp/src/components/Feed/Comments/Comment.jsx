import { Avatar, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Comments.styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function Comment({ comment }) {
  const classes = useStyles();
  const username = JSON.parse(sessionStorage.getItem("user"))?.userName;
  return (
    <Grid
      container
      item
      xs={12}
      direction="column"
      className={classes.commentContainer}
    >
      <Grid
        item
        container
        xs={12}
        direction="row"
        className={classes.commentHeader}
      >
        {username === comment.username && (
          <IconButton className={classes.iconBtn}>
            <MoreVertIcon />
          </IconButton>
        )}
        <Grid item>
          <Avatar src="" alt={comment.username} />
        </Grid>
        <Grid item className={classes.headerText}>
          <Typography className={classes.commentUsername}>
            {comment.username}
          </Typography>
          <Typography variant="body2" className={classes.commentCreate}>
            {new Date(comment.createdAt).toUTCString().slice(4, -3)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.descriptionContainer}>
        <Typography className={classes.description}>
          {comment.description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Comment;
