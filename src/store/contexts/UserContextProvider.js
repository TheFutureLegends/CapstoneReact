import React, { useState, useEffect } from "react";

import axios from "axios";
import { baseApiUrl } from "services/api";
import { substring_text } from "utils/functions";
import AuthHeader from "services/auth.header";

import { useHistory } from "react-router-dom";
import Context from "utils/context";
import AuthService from "services/auth.service";
import { isEmpty } from "utils/functions.js";

const UserContextProvider = (props) => {
  let history = useHistory();

  const [isAuthenticated, setIsAuthenticated] = useState({
    isAuthenticated: false,
    user: {},
    data: [],
  });

  const [isFetching, setIsFetching] = useState(true);

  function fetchAuthenticatedUser() {
    if (!localStorage.getItem("user_access")) {
      localStorage.removeItem("user_access");

      localStorage.removeItem("user_refresh");

      history.push("/login");

      window.location.reload();
    }

    if (isEmpty(isAuthenticated.user)) {
      AuthService.getCurrentAuthenticatedUsername()
        .then((response) => {
          if (isFetching) {
            const array = [];

            axios
              .get(baseApiUrl + "/posts/dataTable", {
                headers: {
                  Authorization: AuthHeader.authBearerHeader(),
                },
              })
              .then((postData) => {
                // eslint-disable-next-line
                postData.data.map((result, key) => {
                  array.push([
                    // result.id,
                    substring_text(result.title, 5),
                    substring_text(result.description, 5),
                    result.visit,
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
    // fetchData();
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
