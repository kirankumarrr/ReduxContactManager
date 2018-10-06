import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

// i didn't understand why arrow  function used like this
export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};
export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};
export const deleteContacts = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: id });
  } catch (e) {
    dispatch({ type: DELETE_CONTACT, payload: id });
  }
  // return {
  //   type: DELETE_CONTACT,
  //   payload: id
  // };
};
export const addContacts = contact => async dispatch => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/users`,
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};
export const updateContact = (contact, id) => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
