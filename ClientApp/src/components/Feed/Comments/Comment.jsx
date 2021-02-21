import {
  Avatar,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./Comments.styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast } from "react-toastify";
import { deleteComment } from "../../../redux/actions/CommentsActions";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../redux/actions/NotificationActions";

function Comment({ comment }) {
  const classes = useStyles();
  const username = JSON.parse(sessionStorage.getItem("user"))?.userName;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deleteComment(comment));
    toast.success("Comment Deleted!");
    handleClose();

    const newNotification = {
      username: username,
      notificationDescription: `Your message has been deleted`,
    };
    dispatch(addNotification(newNotification));
  };

  const handleEdit = () => {};

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
          <IconButton onClick={handleClick} className={classes.iconBtn}>
            <MoreVertIcon />
          </IconButton>
        )}
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DraftsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Edit" />
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </MenuItem>
        </Menu>

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
