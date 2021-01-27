import { Badge, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../EventCard/EventCard";
import { useStyles } from "./Home.styles";
function Home() {
  //const dispatch = useDispatch();
  const events = useSelector((state) => state.EventsReducer.events);
  const classes = useStyles();

  const eventCards = events.map((event) => (
    <Grid key={event.uuid} item className={classes.innerContainer} xs={12} sm={6} md={4} lg={3}>
      <Badge color="error" variant="dot">
        <EventCard event={event} />
      </Badge>
    </Grid>
  ));

  const fetchData = async () => {
    const response = await fetch("/api/events",{
      method : "Get",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      //Dispatch some action
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container direction="row" className={classes.outerContainer}>
      {eventCards}
    </Grid>
  );
}

export default Home;
