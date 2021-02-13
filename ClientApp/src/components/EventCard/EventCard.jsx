import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./EventCard.styles";
import EventCardModal from "../EventCardModal/EventCardModal";
import { Button, CardActions } from "@material-ui/core";

export default function EventCard({ event }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleOpen} className={classes.area}>
        <CardMedia
          className={classes.media}
          image={event.imageUrl}
          title="Contemplative Reptile"
          alt="image jaja"
        />
        <CardContent>
          <Typography variant="caption">
            {new Date(event.startTime).toUTCString()} - ${event.fee}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {event.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Map
        </Button>
      </CardActions>
      <EventCardModal event={event} handleClose={handleClose} open={open} />
    </Card>
  );
}
