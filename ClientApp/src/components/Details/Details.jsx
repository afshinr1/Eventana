import { Button, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./Details.styles";
import React, { useState, useEffect } from "react";

function Details({ event }) {
  const classes = useStyles();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [attendanceType, setAttendanceType] = useState("");

  const getAttendingData = async () => {
    const { id } = event;
    const res = await fetch(`/api/guests/${id}?username=${user.userName}`);
    if(res.ok){
      const data = await res.json();
      setAttendanceType(data.type);
    }
  };

  useEffect(() => {
    getAttendingData();
  }, []);

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
            onClick={(e) => handleAttendance("attending")}
            className={classes.fullWidth}
            variant="outlined"
            color='secondary'
            disabled={attendanceType === "attending" && true}
          >
            Attending
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={(e) => handleAttendance("maybe")}
            className={classes.fullWidth}
            variant="outlined"
            color='secondary'
            disabled={attendanceType === "maybe" && true}

          >
            Maybe
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={(e) => handleAttendance("not attending")}
            className={classes.fullWidth}
            variant="outlined"
            disabled={attendanceType === "not attending" && true}
            color='secondary'
          >
            Not Attending
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Details;
