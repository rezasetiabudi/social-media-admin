import { DELETE_ALBUM, GET_ALBUMS, ALBUMS_ERROR } from "../types";
import axios from "axios";
import API_URL from "../../constants"

export const getAlbums = () => async (dispatch) => {
  try {
    const res = await axios.get(API_URL+'/albums');

    dispatch({
      type: GET_ALBUMS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: ALBUMS_ERROR,
      payload: console.log(e)
    });
  }
};

export const deleteAlbum = (index) => (dispatch) => {
    dispatch({
       type: DELETE_ALBUM,
       payload: index
    })
}