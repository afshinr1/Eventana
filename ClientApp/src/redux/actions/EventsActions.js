export const getAllEvents = () => {
  return async (dispatch) => {
    const res = await fetch("/api/events");
      if (res.ok) {
        const data = await res.json();
        dispatch(setAllEvents(data));
      }
  };
};

 const setAllEvents = (data) => {
     return {type: "SET_EVENTS", payload : data};
 };

 const createEvent = (event) => {

 }