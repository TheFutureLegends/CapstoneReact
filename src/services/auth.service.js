import axios from "axios";
import { baseApiUrl } from "services/Api.js";

const checkLoggedIn = () => {
  if (localStorage.getItem("user")) {
    return true;
  }

  return false;
};

const login = (username, password) => {
  return axios
    .post(baseApiUrl + "/token/", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const Logout = () => {
  localStorage.removeItem("user");
};

export default {
  checkLoggedIn,
  login,
  Logout,
};
