import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_DATA
} from "../actions/types";

let user = localStorage.getItem("user") ? JSON.parse(atob(
  localStorage.getItem("user")
)) : null;

const userExpiry = parseInt(
  localStorage.getItem("user_e") ?
  atob(localStorage.getItem("user_e")).split(".")[1]
  : null, 10);

if (userExpiry <= Date.now()) user = {};
const initialState = user ? { loggedIn: true, user } : { loggedIn: false, user: null };

export default function authenticationReducer (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case USER_DATA:
      return {
        ...state,
        loggedIn: true,
        user: payload
      };
    default:
      return state;
  }
}


