import UserService from "../services/user";
import { USER_DATA } from "./types";

export const fetchMyself = () => (dispatch) => {
  UserService.fetchMyself().then(
    ({ data }) => {
      dispatch({
        type: USER_DATA,
        payload: data
      });
      return Promise.resolve();
    },
    (error) => {
      console.error(error);
      return Promise.reject();
    }
  )
};