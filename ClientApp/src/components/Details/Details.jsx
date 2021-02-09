import { Button, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./Details.styles";
import React from "react";

function Details({ event }) {
  const classes = useStyles();

  const handleAttending = () => {
    console.log(event);
    const { id } = event;
    fetch(`/api/guests/add/${id}`, {
      method: 'POST',
      body : JSON.stringify("available"),
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "application/json",
        "accept": "application/json",
      },
    });
  };
  const handleMaybe = () => {};
  const handleNotAttending = () => {};

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Typography variant="subtitle2" color="initial">
          Description
        </Typography>
        <Typography>Short description</Typography>
      </Grid>
      <Grid item container justify="space-around" direction="row" xs={12}>
        <Grid item xs={3}>
          <Button
            onClick={handleAttending}
            className={classes.fullWidth}
            variant="outlined"
          >
            Attending
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={handleMaybe}
            className={classes.fullWidth}
            variant="outlined"
          >
            Maybe
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={handleNotAttending}
            className={classes.fullWidth}
            variant="outlined"
          >
            Not Attending
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Details;
