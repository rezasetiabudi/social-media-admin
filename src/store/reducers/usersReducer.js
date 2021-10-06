/* eslint-disable import/no-anonymous-default-export */
import { GET_USERS, DELETE_USER, PUT_USERS } from "../types";

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
    case PUT_USERS:
      console.log("reducer", action.payload)
      console.log("list of users",state.users)
      console.log("payload id", action.payload.id)
      let idx = state.users.findIndex((u) => u.id===action.payload.id)
      let usersUpdate = state.users[idx].name = action.payload.name
      console.log("updated users", usersUpdate)
      return {  
        users: state.users,  
        loading: false
      }
    case DELETE_USER:
      console.log("reducer delete user", state.users.filter(user => user.id !== action.payload))
      let reducedUser = state.users.filter(user => user.id !== action.payload)
      return {
        users: reducedUser,
        loading: false
      }
    default:
      return state;
  }
}
