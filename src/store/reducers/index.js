import { combineReducers } from "redux";
import postsReducer from "./postsReducer.js";
import userReducer from "./usersReducer";

export default combineReducers({
  users: userReducer,
  posts: postsReducer
});
