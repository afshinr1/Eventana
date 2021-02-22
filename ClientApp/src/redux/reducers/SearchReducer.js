const initialState = { search: "" };
export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search : action.payload
      }
    default:
      return state;
  }
};