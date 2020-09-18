import Cookies from "universal-cookie";
import axios from "axios";
import { COOKIE_DOMAIN, BACKEND_URL } from "services/api";
import AuthHeader from "services/auth.header";

const cookies = new Cookies();

const login = (loginDetail) => {
  return axios
    .post(BACKEND_URL + "/auth/jwt/create/", loginDetail)
    .then((response) => {
      if (response.data.access) {
        cookies.set("access_cookie", response.data.access, {
          path: "/",
          domain: COOKIE_DOMAIN,
        });

        cookies.set("refresh_cookie", response.data.refresh, {
          path: "/",
          domain: COOKIE_DOMAIN,
        });
      }
      return response.data;
    });
};

const register = (registerDetail) => {
  return axios
    .post(BACKEND_URL + "/auth/users/", registerDetail)
    .then((res) => {
      return res.status;
    });
};

const Logout = () => {
  cookies.remove("access_cookie", { path: "/", domain: COOKIE_DOMAIN });

  cookies.remove("refresh_cookie", { path: "/", domain: COOKIE_DOMAIN });
};

const getCurrentAuthenticatedUsername = () => {
  return axios({
    method: "get",
    url: BACKEND_URL + "/auth/users/me/",
    headers: {
      Authorization: AuthHeader.authBearerHeader(),
    },
  }).then((response) => {
    return response.data;
  });
};

export default {
  login,
  register,
  Logout,
  getCurrentAuthenticatedUsername,
};
