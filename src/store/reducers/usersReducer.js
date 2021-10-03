/* eslint-disable import/no-anonymous-default-export */
import { GET_USERS, DELETE_USER } from "../types";

const initialState = {
  users: [],
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {  
        ...state,
        users: action.payload,
        loading: false
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        loading: false
      }
    default:
      return state;
  }
}
