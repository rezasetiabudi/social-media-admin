import { DELETE_POST, GET_POSTS, POSTS_ERROR } from "../types";
import axios from "axios";
import API_URL from "../../constants"

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(API_URL+'/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: POSTS_ERROR,
      payload: console.log(e)
    });
  }
};

export const deletePost = (index) => (dispatch) => {
    dispatch({
       type: DELETE_POST,
       payload: index
    })
 }