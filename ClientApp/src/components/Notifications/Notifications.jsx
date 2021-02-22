import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./Notifications.styles";
import CloseIcon from "@material-ui/icons/Close";
import { getNotifications } from "../../redux/actions/NotificationActions";
import { useSelector, useDispatch } from "react-redux";
import NotifCard from "./NotifCard";

export default function EventCardModal({ open, handleClose }) {
  const classes = useStyles();
  const username = JSON.parse(sessionStorage.getItem("user"))?.userName;
  const notifications = useSelector(
    (state) => state.NotificationReducer.notifications
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      dispatch(getNotifications(username));
    }
  }, []);
  const list = notifications.map((notif) => (
    <NotifCard key={notif.id} notification={notif} />
  ));
  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.container}>
            <IconButton onClick={handleClose} className={classes.iconBtn}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" className={classes.header}>
              notifications
            </Typography>
            {list}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
