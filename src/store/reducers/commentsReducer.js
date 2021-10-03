/* eslint-disable import/no-anonymous-default-export */
import { GET_COMMENTS, DELETE_COMMENT } from "../types";

const initialState = {
  comments: [],
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };
      case DELETE_COMMENT:
        return {
          ...state,
          comments: state.comments.filter(comment => comment.id !== action.payload),
          loading: false
        }
    default:
      return state;
  }
}
