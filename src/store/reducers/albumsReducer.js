/* eslint-disable import/no-anonymous-default-export */
import { GET_ALBUMS, DELETE_ALBUM } from "../types";

const initialState = {
  albums: [],
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
        loading: false
      };
      case DELETE_ALBUM:
        return {
          ...state,
          albums: state.albums.filter(album => album.id !== action.payload),
          loading: false
        }
    default:
      return state;
  }
}
