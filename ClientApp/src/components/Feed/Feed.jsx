import { Grid, Hidden } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./Feed.styles";
import InputBox from "./InputBox/InputBox";
import {
  getAllComments,
  addComment,
} from "../../redux/actions/CommentsActions";
import { useDispatch } from "react-redux";
import { toast, Flip } from 'react-toastify';
import Comments from "./Comments/Comments";

function Feed({ event }) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddComment = (commentDTO) => {
    const newComment = JSON.stringify(commentDTO);
    dispatch(addComment(newComment));
    toast.success("Comment added!", {
        autoClose : 3000,
        position : toast.POSITION.TOP_CENTER,
        transition: Flip,
    })
  };

  useEffect(() => {
    dispatch(getAllComments(event.id));
  }, []);
  return (
    <Grid container direction="column" className={classes.container}>
      {user && <InputBox handleAddComment={handleAddComment} event={event} />}
      <Comments />
    </Grid>
  );
}

export default Feed;
