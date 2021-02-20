const initialState = { guests: [] };
export const GuestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GUESTS":
      return {
        ...state,
        guests : action.payload
      }
    default:
      return state;
  }
};