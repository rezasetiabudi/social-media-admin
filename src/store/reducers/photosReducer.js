/* eslint-disable import/no-anonymous-default-export */
import { GET_PHOTOS } from "../types";

const initialState = {
  photos: [],
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
