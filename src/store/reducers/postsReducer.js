/* eslint-disable import/no-anonymous-default-export */
import { GET_POSTS, DELETE_POST } from "../types";

const initialState = {
  posts: [],
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload),
          loading: false
        }
    default:
      return state;
  }
}
