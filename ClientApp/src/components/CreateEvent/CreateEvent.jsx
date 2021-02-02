import { Button } from "@material-ui/core";
import React from "react";
import CreateEventModal from "./CreateEventModal";

function CreateEvent() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createEvent = async (event) => {
    console.log(event);
    const response = await fetch("/api/events/createEvent", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "application/json",
        "accept": "application/json",
      },
    });
    if (response.ok) {
      //Show success Message
      let data = await response.json();
      console.log(data);
      handleClose();
    } else {
      //Show failure message
      console.log(await response.json());
    }
  };
  return (
    <>
      <Button onClick={handleOpen} color="primary">
        Create
      </Button>
      <CreateEventModal
        open={open}
        createEvent={createEvent}
        handleClose={handleClose}
      />
    </>
  );
}

export default CreateEvent;
