export const getAllGuests = (id) => {
    return async (dispatch) => {
      const res = await fetch(`/api/guests?id=${id}`);
      if (res.ok) {
        const data =await res.json();
        dispatch(setAllGuests(data));
      }
    };
  };

  const setAllGuests = (comments) => {
    return { type: "SET_GUESTS", payload: comments };
  };

