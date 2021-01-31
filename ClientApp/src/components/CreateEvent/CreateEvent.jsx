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

  const createEvent = async (e) => {
    const response = await fetch("/api/events/createEvent", {
      authorization: sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
      method: "POST",
    });
    if (response.ok) {
      alert("Authorized, get events");
      console.log(await response.json());
    } else {
      alert("Unauthorized");
      console.log(await response.json());
    }
  };
  return (
    <>
      <Button onClick={handleOpen} color="primary">
        Create
      </Button>
      <CreateEventModal open={open} createEvent={createEvent} handleClose={handleClose} />
    </>
  );
}

export default CreateEvent;
