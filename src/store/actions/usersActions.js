import { DELETE_USER, GET_USERS, USERS_ERROR } from "../types";
import axios from "axios";

import API_URL from "../../constants";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(API_URL+'/users');

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};


export const deleteUser = (index) => (dispatch) => {
  dispatch({
     type: DELETE_USER,
     payload: index
  })
}