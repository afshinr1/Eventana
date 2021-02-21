import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Notifications.styles";
import { useDispatch } from "react-redux";
import { deleteNotification } from "../../redux/actions/NotificationActions";
import { toast } from "react-toastify";

function NotifCard({ notification }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNotification(notification));
  };
  return (
    <Box variant="div" className={classes.notifCardContainer}>
      <Box variat="div" className={classes.cardInnerContainer}>
        <Typography className={classes.notifTitle} variant="body2" gutterBottom>
          Notification
        </Typography>
        <Typography className={classes.date} variant="subtitle2" paragraph>
          {new Date(notification.createdAt).toUTCString().slice(4, -3)}
        </Typography>
        <Typography gutterBottom variant="body2">
          {notification.notificationDescription}
        </Typography>
        <Button
          className={classes.btn}
          size="small"
          variant="outlined"
          onClick={handleDelete}
        >
          Dismiss
        </Button>
      </Box>
    </Box>
  );
}

export default NotifCard;
