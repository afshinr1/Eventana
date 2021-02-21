import { toast } from "react-toastify";

export const getAllComments = (id) => {
  return async (dispatch) => {
    const res = await fetch(`/api/comments/${id}`);
    if (res.ok) {
      const data =await res.json();
      dispatch(setAllComments(data));
    }
  };
};

const setAllComments = (comments) => {
  return { type: "SET_COMMENTS", payload: comments };
};

export const addComment = (commentDTO) => {
  return async (dispatch) => {
    const res = await fetch(`/api/comments/create`, {
      method: "POST",
      body: commentDTO,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      dispatch({ type: "ADD_COMMENT", payload: data });
    }
  };
};

export const deleteComment = (comment) => {
  return async (dispatch) => {
    let res = await fetch(`api/comments/delete/${comment.id}`, {
      method: "delete",
      body: JSON.stringify(comment),
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    if (res.ok){
      dispatch({ type: "REMOVE_COMMENT", payload: comment.id})
    }
  }
}