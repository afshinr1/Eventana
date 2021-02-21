const initialState = { notifications: [] };

export const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATIONS":
      return {
        ...state,
        notifications: action.payload,
      };

    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [action.payload, ...state.notifications]
      };

      case "DELETE_NOTIFICATION":
        return {
          ...state,
          notifications: state.notifications.filter(notif => notif.id !== action.payload)
        }

    default:
      return state;
  }
};
