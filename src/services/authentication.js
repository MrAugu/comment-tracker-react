import axios from "axios";
import { BASE_API_URL } from "../config";
import UserService from "./user";

class AuthenticationService {
  login (username, password) {
    return axios.post(`${BASE_API_URL}/login`, {
      username,
      password
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