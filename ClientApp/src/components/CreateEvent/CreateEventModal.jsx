import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./CreateEvent.styles";

export default function CreateEventModal({ open, handleClose, event }) {
  const classes = useStyles();


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
          <Grid container direction='column' alignItems='center' className={classes.container}>

            <Typography variant='h5' className={classes.title} gutterBottom >Create event</Typography>
            <TextField
                label="Name"
                variant="outlined"
                color="secondary"

                className={classes.inputBase}
                />
             <TextField
                label="Description"
                variant="outlined"
                color="secondary"
                className={classes.inputBase}
            />
             <TextField
                label="Location"
                variant="outlined"
                color="secondary"
                className={classes.inputBase}
                />
                <Grid item container justify='space-between' className={classes.inputBase}>
                    <Grid item >
                    <TextField
                label="Location"
                variant="outlined"
                color="secondary"
                style={{width:'100%'}}
                />
                    </Grid>
                    <Grid item  >
                    <TextField
                label="Location"
                variant="outlined"
                color="secondary"
                style={{width:'100%'}}
                />
                    </Grid>
                </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
