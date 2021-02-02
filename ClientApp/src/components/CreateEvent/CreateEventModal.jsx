import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./CreateEvent.styles";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { DateTimePicker } from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CreateEventModal({ open, handleClose, createEvent }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("public");
  const [capacity, setCapacity] = useState(0);

  const [fee, setFee] = useState(0);
  const [image, setImage] = useState(null);
  const [selectedCategories, setCategories] = useState([]);
  const [selectedStartDate, handleStartChange] = useState(new Date());
  const [selectedEndDate, handleEndChange] = useState(new Date());

  const allCategories = useSelector(
    (state) => state.CategoriesReducer.categories
  );

  const handleCleanup = () => {
    setName("");
    setDescription("");
    setLocation("");
    setFee(0);
    setImage(null);
    setCategories([]);
    handleClose();
  };
  const handleCategoryChange = (values) => {
    setCategories(values);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    } else {
      setImage(null);
    }
  };

  const handleCreateEvent = async (e) => {
    let imageData = new FormData();
    imageData.append("imageFile", image);
    const res = await fetch("/api/imageupload", {
      method: "POST",
      body: imageData,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    }).catch((err) => console.log(err));

    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let imageUrl = data.imageUrl;
      let categoriesStr = selectedCategories.toString();
      //TODO
      createEvent({
        name,
        description,
        location,
        type,
        startTime: selectedStartDate.toJSON(),
        endTime: selectedEndDate.toJSON(),
        fee: parseInt(fee),
        capacity: parseInt(capacity),
        categories: categoriesStr,
        imageUrl,
        hostedBy: "jaja",
      });
    } else {
      console.log("error uploading image in create event");
    }
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleCleanup}
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
              onChange={(e) => setName(e.target.value)}
              className={classes.inputBase}
            />
            <TextField
              label="Description"
              variant="outlined"
              color="primary"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={classes.inputBase}
            />
            <TextField
              label="Location"
              variant="outlined"
              color="primary"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={classes.inputBase}
            />
            <Grid
              item
              container
              justify="space-between"
              className={classes.inputBase}
            >
              <Grid item xs={5}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Type</InputLabel>
                  <Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value="public">Public</MenuItem>
                    <MenuItem value="private">Private</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Capacity
                  </InputLabel>
                  <OutlinedInput
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    labelWidth={60}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              item
              container
              justify="space-between"
              className={classes.inputBase}
            >
              <Grid item xs={5}>
                <DateTimePicker
                  label="Start Time"
                  disablePast
                  inputVariant="outlined"
                  value={selectedStartDate}
                  onChange={handleStartChange}
                />
              </Grid>
              <Grid item xs={5}>
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
              <Grid item xs={5}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Fee
                  </InputLabel>
                  <OutlinedInput
                    type="number"
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Grid>
            </Grid>

            <Autocomplete
              multiple
              options={allCategories}
              disableCloseOnSelect
              value={selectedCategories}
              renderOption={(category, { selected }) => (
                <>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    color="primary"
                  />
                  {category}
                </>
              )}
              className={classes.inputBase}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Categories" />
              )}
              onChange={(event, value) => handleCategoryChange(value)}
            />
            <Button
              disabled={
                !name ||
                !description ||
                !location ||
                !fee ||
                !image ||
                selectedCategories.length === 0 ||
                !selectedStartDate ||
                !selectedEndDate ||
                !capacity ||
                !type
              }
              variant="contained"
              color="primary"
              onClick={handleCreateEvent}
            >
              Create
            </Button>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
