import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./EventCardModal.styles";
import Details from "../Details/Details";
import Guests from "../Guests/Guests";
import Feed from "../Feed/Feed";
import CloseIcon from "@material-ui/icons/Close";

export default function EventCardModal({ open, handleClose, event }) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <img
              src={event.imageUrl}
              alt="image"
              className={classes.eventImage}
            />
            <Box component="div" className={classes.content}>
              <Typography align="center" className={classes.title} variant="h5">
                {event.name}
              </Typography>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  variant="fullWidth"
                  className={classes.tabs}
                >
                  <Tab className={classes.tab} label="Details" />
                  <Tab className={classes.tab} label="Guests" />
                  <Tab className={classes.tab} label="Feed" />
                </Tabs>
              </AppBar>
              {value === 0 && <Details event={event} />}
              {value === 1 && <Guests event={event} />}
              {value === 2 && <Feed event={event} />}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
