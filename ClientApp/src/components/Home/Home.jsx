import { Backdrop, Badge, CircularProgress, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../redux/actions/EventsActions";
import EventCard from "../EventCard/EventCard";
import { useStyles } from "./Home.styles";
function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.EventsReducer.events);
  const classes = useStyles();

  const eventCards = events?.map((event) => (
    <Grid key={event.id} item className={classes.innerContainer} xs={12} sm={6} md={4} lg={3}>
      <Badge key={event.id} color="error" variant="dot">
        <EventCard event={event} />
      </Badge>
    </Grid>
  ));


  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return (
    <Grid container direction="row" className={classes.outerContainer}>
      {eventCards}
    </Grid>
  );
}

export default Home;
