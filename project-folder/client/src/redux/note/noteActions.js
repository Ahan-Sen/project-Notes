import React, { useReducer } from "react";
import setToken from "../../utils/setToken";
import axios from "axios";
import {
  CLEAR_SEARCH,
  SEARCH_NOTE,
  ADD_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE,
  EDIT_NOTE,
  CLEAR_EDIT,
  GET_NOTES,
  NOTES_ERROR,
  CLEAR_NOTES,
} from "../types";

export const getNotes = () => async (dispatch) => {
  if (localStorage.token) {
    setToken(localStorage.token);
  }
  try {
    const res = await axios.get("/notes");
    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response,
    });
  }
};

export const addNote = (note) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/notes", note, config);
    dispatch({
      type: ADD_NOTE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response,
    });
  }
};

export const removeNote = (id) => async (dispatch) => {
  try {
    await axios.delete(`notes/${id}`);
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.data,
    });
  }
};

export const updateNote = (note) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/notes/${note._id}`, note, config);
    dispatch({
      type: UPDATE_NOTE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.data,
    });
  }
};

export const editNote = (note) => (dispatch) => {
  dispatch({
    type: EDIT_NOTE,
    payload: note,
  });
  //console.log(note);
};

export const clearEdit = (note) => (dispatch) => {
  dispatch({
    type: CLEAR_EDIT,
    payload: note,
  });
  //console.log(note);
};

export const clearNotes = () => (dispatch) => {
  dispatch({
    type: CLEAR_NOTES,
  });
};

export const searchNote = (note) => (dispatch) => {
  dispatch({
    type: SEARCH_NOTE,
    payload: note,
  });
};
export const clearSearch = () => (dispatch) => {
  dispatch({
    type: CLEAR_SEARCH,
  });
};
