export const getNotifications = (username) => {
  return async (dispatch) => {
    let res = await fetch(`/api/notifications?username=${username}`);
    if (res.ok) {
      let data = await res.json();
      dispatch(setNotifications(data));
    }
  };
};

const setNotifications = (notifications) => {
  return { type: "SET_NOTIFICATIONS", payload: notifications };
};

export const addNotification = (notification) => {
  return async (dispatch) => {
    const res = await fetch(`/api/notifications/add`, {
      method: "POST",
      body: JSON.stringify(notification),
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      dispatch({ type: "ADD_NOTIFICATION", payload: data });
    }
  };
};

export const deleteNotification = (notification) => {
  return async (dispatch) => {
    const res = await fetch("/api/notifications/delete", {
      method: "delete",
      body: JSON.stringify(notification),
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    if (res.ok) {
      dispatch({ type: "DELETE_NOTIFICATION", payload: notification.id });
    }
  };
};
