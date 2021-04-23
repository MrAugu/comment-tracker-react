import axios from "axios";
import { API_BASE_URL } from "../config";
import UserService from "./user";

class AuthenticationService {
  login (username, password) {
    return axios.post(`${API_BASE_URL}/login`, {
        "username": username,
        "password": password
      }).then(async (response) => {
      const body = response.data;
      localStorage.setItem("user_t", btoa(body.data.token));
      localStorage.setItem("user_r", btoa(body.data.refreshToken));
      localStorage.setItem("user_e", btoa(`NHY8HYFUigmj8fhn7btnuvhbiomhjfn7iTVYUIBMHUGNYOIJ3rq.${Date.now() + Math.round(1000 * 60 * 60 * 0.5)}.7nkwjdw30IGUFNHVKLMsr9eigjoidjwm`));
      await UserService.fetchMyself();
      return body;
    });
  }

  logout () {
    localStorage.removeItem("user");
    localStorage.removeItem("user_t");
    localStorage.removeItem("user_r");
    localStorage.removeItem("user_e");
    return new Promise((resolve) => resolve(true));
  }

  register (username, password) {
    return axios.post(`${API_BASE_URL}/signup`, {
      username,
      password
    });
  }
}

export default new AuthenticationService();