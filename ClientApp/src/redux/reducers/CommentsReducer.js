
const initialState = { comments: [] };

/* Used for setting and adding a joined room */
export const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return {
        ...state,
        comments: [...action.payload],
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };

    default:
      return state;
  }
};
