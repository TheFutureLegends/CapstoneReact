import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { BACKEND_URL } from "services/api";
import { substring_text } from "utils/functions";
import { isEmpty } from "utils/functions";

import Context from "utils/context";
import AuthService from "services/auth.service";
import AuthHeader from "services/auth.header";

const UserContextProvider = (props) => {
  let history = useHistory();

  const [isAuthenticated, setIsAuthenticated] = useState({
    isAuthenticated: false,
    user: {},
    data: [],
  });

  const [isFetching, setIsFetching] = useState(true);

  function fetchAuthenticatedUser() {
    var pathNameArr = props.location.pathname.split("/");

    const access = localStorage.getItem("user_access");

    const refresh = localStorage.getItem("user_refresh");

    // if (!access || !refresh) {
    //   localStorage.removeItem("user_access");

    //   localStorage.removeItem("user_refresh");

    //   history.push("/login");

    //   window.location.reload();
    // }

    if (isFetching) {
      if (pathNameArr[1] === "admin") {
        if (access && refresh && !isAuthenticated.isAuthenticated) {
          setIsAuthenticated({
            ...isAuthenticated,
            isAuthenticated: true,
          });
        } else if (!access || !refresh) {
            localStorage.removeItem("user_access");
            localStorage.removeItem("user_refresh");
            history.push("/login");
            window.location.reload();
        }
      } else {
        if (access && !isAuthenticated.isAuthenticated) {
          setIsAuthenticated({
            ...isAuthenticated,
            isAuthenticated: true,
          });
        }
      }
    }

    if (isAuthenticated.isAuthenticated && isEmpty(isAuthenticated.user)) {
      AuthService.getCurrentAuthenticatedUsername()
        .then((response) => {
          if (isFetching) {
            const array = [];

            axios
              .get(BACKEND_URL + "/api/posts/dataTable", {
                headers: {
                  Authorization: AuthHeader.authBearerHeader(),
                },
              })
              .then((postData) => {
                // eslint-disable-next-line
                postData.data.map((result, key) => {
                  array.push([
                    substring_text(result.title, 5),
                    substring_text(result.description, 5),
                    result.visit,
                    result.slug,
                  ]);
                });

                setIsAuthenticated({
                  isAuthenticated: true,
                  user: response,
                  data: array,
                });

                setIsFetching(false);
              });
          }
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
    fetchAuthenticatedUser();
    return () => {
      fetchAuthenticatedUser();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isFetching]);

  return (
    <Context.Provider value={isAuthenticated}>
      {props.children}
    </Context.Provider>
  );
};

export default UserContextProvider;
