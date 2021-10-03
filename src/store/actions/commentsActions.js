import { DELETE_COMMENT, GET_COMMENTS, COMMENTS_ERROR    } from "../types";
import axios from "axios";
import API_URL from "../../constants"

export const getComments = (pId) => async (dispatch) => {
  try {
    const res = await axios.get(API_URL+'/comments?postId='+pId);
    console.log("komentar", res.data)
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: COMMENTS_ERROR,
      payload: console.log(e)
    });
  }
};

export const deleteComment = (index) => (dispatch) => {
    dispatch({
       type: DELETE_COMMENT,
       payload: index
    })
}