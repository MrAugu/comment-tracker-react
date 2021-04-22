import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE
} from "./types";
import AuthenticationService from "../services/authentication";

export const register = (username, password) => (dispatch) => {
  return AuthenticationService.register(username, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS
      });
      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      dispatch({
        type: REGISTER_FAIL
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthenticationService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthenticationService.logout().then(
    () => {
      dispatch({
        type: LOGOUT
      });

      return Promise.resolve();
    },
    () => {
      return Promise.reject();
    }
  )
};