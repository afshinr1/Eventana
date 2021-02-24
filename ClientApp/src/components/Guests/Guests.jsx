import React, { useEffect, useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Backdrop, Box } from "@material-ui/core";
import { useStyles } from "./Guests.styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Guests({ event }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [attending, setAttending] = useState([]);
  const [maybe, setMaybe] = useState([]);
  const [notAttending, setNotAttending] = useState([]);
  const [invited, setInvited] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getGuests = async () => {
    const response = await fetch(`/api/guests?id=${event.id}`);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      setLoading(false);
      data.forEach((guest) => {
        switch (guest.type) {
          case "attending":
            setAttending((prevAttending) => [...prevAttending, guest.username]);
            break;
          case "maybe":
            setMaybe((prevMaybe) => [...prevMaybe, guest.username]);
            break;
          case "not attending":
            setNotAttending((prev) => [...prev, guest.username]);
            break;
        }
      });
    }
  };

  useEffect(() => {
    getGuests();
  }, []);

  return (
    <Box component="div" className={classes.root}>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box className={classes.header}>
        <Typography className={classes.title}>Hosted By: Jjaajlmon</Typography>
      </Box>
      <Accordion
        className={classes.accordian}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Attending - {attending.length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {attending.map((guest) => (
            <Typography>{guest}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordian}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Maybe - {maybe.length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {maybe.map((guest) => (
            <Typography>{guest}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordian}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            No - {notAttending.length}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {notAttending.map((guest) => (
            <Typography>{guest}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordian}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Invited</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
