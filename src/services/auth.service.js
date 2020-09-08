import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { authUrl } from "services/Api.js";
import AuthHeader from "services/auth.header";

const CheckAuthenticatedUser = () => {
  let history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkLocalStorage() {
    if (localStorage.getItem("user_access")) {
      setIsLoggedIn(true);
    }
  }

  function isValid() {
    if (isLoggedIn) {
      const access_token = localStorage.getItem("user_access");

      axios
        .post(authUrl + "/jwt/verify/", {
          token: access_token,
        })
        .then((response) => {
          setIsLoggedIn(true);
        })
        .catch((error) => {
          localStorage.removeItem("user_access");

          localStorage.removeItem("user_refresh");

          history.push("/login");

          window.location.reload();
        });
    }
  }

  useEffect(() => {
    checkLocalStorage();

    isValid();

    return () => {
      checkLocalStorage();

      isValid();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return [isLoggedIn, setIsLoggedIn];
};

const refreshToken = () => {
  const access = localStorage.getItem("user_access");

  axios
    .post(authUrl + "/jwt/verify/", {
      token: access,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        const refresh = localStorage.getItem("user_refresh");

        axios
          .post(authUrl + "/jwt/refresh/", {
            refresh: refresh,
          })
          .then((response) => {
            // localStorage.removeItem("user_access");
            // localStorage.setItem("user_access", response.data.access);
            return response.data;
          });
      }
      return error.response;
    });
};

const login = (username, password) => {
  return axios
    .post(authUrl + "/jwt/create/", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.access) {
        // localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("user_access", response.data.access);
        localStorage.setItem("user_refresh", response.data.refresh);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user_access");
  localStorage.removeItem("user_refresh");
};

const getCurrentAuthenticatedUsername = () => {
  return axios({
    method: "get",
    url: authUrl + "/users/me/",
    headers: {
      Authorization: AuthHeader.authBearerHeader(),
    },
  }).then((response) => {
    return response.data;
  });
};

export default {
  CheckAuthenticatedUser,
  refreshToken,
  login,
  logout,
  getCurrentAuthenticatedUsername,
};