const initialState = {
  events: [],
};
export const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EVENTS":
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
};
