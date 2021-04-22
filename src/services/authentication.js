import axios from "axios";
import { BASE_API_URL } from "../config";

class AuthenticationService {
  login (username, password) {
    return axios.post(`${BASE_API_URL}/login`, {
      username,
      password
    }).then((response) => {
      const body = response.data;
      localStorage.setItem("user", body.data.token);
      localStorage.setItem("refresh_user", body.data.refreshToken);
      return body;
    });
  }

  logout () {
    localStorage.removeItem("user");
    return true;
  }

  register (username, password) {
    return axios.post(`${BASE_API_URL}/signup`, {
      username,
      password
    });
  }
}

export default new AuthenticationService();