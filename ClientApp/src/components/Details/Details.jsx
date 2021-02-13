import { Button, Chip, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./Details.styles";
import React, { useState, useEffect } from "react";

function Details({ event }) {
  const classes = useStyles();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [attendanceType, setAttendanceType] = useState("");
  const categoryList = event.categories
    .split(",")
    .map((category,index) => <Chip key={index} className={classes.chip} disabled label={category} />);
  console.log(categoryList);

  const getAttendingData = async () => {
    if (user) {
      const { id } = event;
      const res = await fetch(`/api/guests/${id}?username=${user.userName}`);
      if (res.ok) {
        const data = await res.json();
        setAttendanceType(data.type);
      }
    }
  };

  useEffect(() => {
    getAttendingData();
  }, []);

  const getDate = (date) => {
    let unformatDate = new Date(date).toUTCString();
    unformatDate = unformatDate.slice(4, -3);
    return unformatDate;
  };

  const handleAttendance = (type) => {
    console.log(event);
    const { id } = event;
    const obj = {
      username: user.userName,
      type: type,
      userImageUrl: "profilpic url",
    };
    fetch(`/api/guests/add/${id}`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    setAttendanceType(type);
  };

  return (
    <Grid container className={classes.outerContainer} direction="column">
      <Grid item xs={12} className={classes.margin}>
        <Typography gutterBottom variant="subtitle2" className={classes.grey}>
          Description
        </Typography>
        <Typography>{event.description}</Typography>
      </Grid>
      <Grid item className={classes.margin} xs={12}>
        <Typography gutterBottom variant="subtitle2" className={classes.grey}>
          Location
        </Typography>
        <Typography>{event.location}</Typography>
      </Grid>
      <Grid item container xs={12} className={classes.margin} direction="row">
        <Grid item xs={6}>
          <Typography className={classes.grey} gutterBottom variant="subtitle2">
            Type
          </Typography>
          <Typography className={classes.capitalize}>{event.type}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.grey} gutterBottom variant="subtitle2">
            Status
          </Typography>
          <Typography>Active</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.margin} direction="row">
        <Grid item xs={6}>
          <Typography className={classes.grey} gutterBottom variant="subtitle2">
            Start Time
          </Typography>
          <Typography>{getDate(event.startTime)}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.grey} gutterBottom variant="subtitle2">
            End Time
          </Typography>
          <Typography>{getDate(event.endTime)}</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.margin} direction="row">
        <Grid item xs={6}>
          <Typography className={classes.grey} gutterBottom variant="subtitle2">
            Fee
          </Typography>
          <Typography>{event.fee}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.grey} gutterBottom variant="subtitle2">
            Capacity
          </Typography>
          <Typography>{event.capacity}</Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.margin} xs={12}>
        <Typography className={classes.grey} gutterBottom variant="subtitle2">
          Categories
        </Typography>
        {categoryList}
      </Grid>
      <Grid item container justify="space-between" direction="row"  xs={12}>
        <Button
          onClick={(e) => handleAttendance("attending")}
          className={classes.btn}
          variant="outlined"
          color={attendanceType === "attending" ? "secondary" : "primary"}
          disabled={!user && true}
        >
          Attending
        </Button>
        <Button
          onClick={(e) => handleAttendance("maybe")}
          className={classes.btn}
          variant="outlined"
          color={attendanceType === "maybe" ? "secondary" : "primary"}
          disabled={!user && true}
        >
          Maybe
        </Button>
        <Button
          onClick={(e) => handleAttendance("not attending")}
          className={classes.btn}
          variant="outlined"
          disabled={!user && true}
          color={attendanceType === "not attending" ? "secondary" : "primary"}
        >
          Not Attending
        </Button>
      </Grid>
    </Grid>
  );
}

export default Details;
