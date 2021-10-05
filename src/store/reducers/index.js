import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer.js";
import postsReducer from "./postsReducer.js";
import userReducer from "./usersReducer";
import albumsReducer from "./albumsReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
  users: userReducer,
  posts: postsReducer,
  comments: commentsReducer,
  albums: albumsReducer,
  photos: photosReducer
});
