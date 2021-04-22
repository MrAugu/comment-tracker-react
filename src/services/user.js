import axios from "axios";
import { authorizationHeader } from "./authorization";
import { API_BASE_URL } from "../config";

class UserService {
  fetchMyself () {
    return axios.get(`${API_BASE_URL}/me`, {
      headers: authorizationHeader()
    }).then((response) => {
      const body = response.data;
      let encodedUser = body.data;
      encodedUser = JSON.stringify(encodedUser);
      encodedUser = btoa(encodedUser);
      localStorage.setItem("user", encodedUser);
      
      return body;
    });
  }
}

export default new UserService();