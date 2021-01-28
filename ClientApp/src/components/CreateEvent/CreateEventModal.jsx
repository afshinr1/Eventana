import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {  Grid, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./CreateEvent.styles";
import { DateTimePicker } from "@material-ui/pickers";
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function CreateEventModal({ open, handleClose, event }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fee, setFee] = useState("");
  const [image, setImage] = useState(null);
  const [selectedCategories, setCategories] = useState([]);
  const [selectedStartDate, handleStartChange] = useState(new Date());
  const [selectedEndDate, handleEndChange] = useState(new Date());

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
          <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.container}
          >
            <Typography variant="h5" className={classes.title} gutterBottom>
              Create event
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              color="primary"
              value={name}
              onChange={e=> setName(e.target.value)}
              className={classes.inputBase}
            />
            <TextField
              label="Description"
              variant="outlined"
              color="primary"
              value={description}
              onChange={e=> setDescription(e.target.value)}
              className={classes.inputBase}
            />
            <TextField
              label="Location"
              variant="outlined"
              color="primary"
              value={location}
              onChange={e=> setLocation(e.target.value)}
              className={classes.inputBase}
            />
            <Grid
              item
              container
              justify="space-between"
              className={classes.inputBase}
            >
              <Grid item>
                <DateTimePicker
                  label="Start Time"
                  disablePast
                  inputVariant="outlined"
                  value={selectedStartDate}
                  onChange={handleStartChange}
                />
              </Grid>
              <Grid item>
                <DateTimePicker
                  label="End Time"
                  inputVariant="outlined"
                  disablePast
                  minDate={selectedStartDate}
                  minDateMessage="End date cannot be before start date"
                  value={selectedEndDate}
                  onChange={handleEndChange}
                />
              </Grid>
            </Grid>

            <Grid
              item
              container
              justify="space-between"
              className={classes.inputBase}
            >
              <Grid item>
                <TextField
                  label="Fee"
                  variant="outlined"
                  color="primary"
                  className={classes.inputBase}
                />
              </Grid>
              <Grid item>
                <input
                  type='file'
                />
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
