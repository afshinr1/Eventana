import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { AppBar, Box, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import { useStyles } from "./EventCardActions";

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
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid container direction="column" className={classes.container}>
            <img src="" alt="image" className={classes.eventImage} />
            <Box component="div" className={classes.content}>
              <Typography align="center" className={classes.title} variant="h5">
                This is a brief
              </Typography>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  variant="fullWidth"
                  className={classes.tabs}
                >
                  <Tab label="Details"/>
                  <Tab label="Guests" />
                  <Tab label="Feed" />
                </Tabs>
              </AppBar>
            </Box>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
