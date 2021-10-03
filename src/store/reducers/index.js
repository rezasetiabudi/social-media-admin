import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer.js";
import postsReducer from "./postsReducer.js";
import userReducer from "./usersReducer";

export default combineReducers({
  users: userReducer,
  posts: postsReducer,
  comments: commentsReducer
});
