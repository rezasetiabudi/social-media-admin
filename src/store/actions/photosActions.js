import { GET_PHOTOS, PHOTOS_ERROR } from "../types";
import axios from "axios";
import API_URL from "../../constants"

export const getPhotos = () => async (dispatch) => {
  try {
    const res = await axios.get(API_URL+'/photos');

    dispatch({
      type: GET_PHOTOS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: PHOTOS_ERROR,
      payload: console.log(e)
    });
  }
};