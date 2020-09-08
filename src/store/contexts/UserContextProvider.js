import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "utils/context";
import AuthService from "services/auth.service";
import { isEmpty } from "utils/functions.js";

const UserContextProvider = (props) => {
  let history = useHistory();

  const [user, setUser] = useState({});

  function fetchAuthenticatedUser() {
    if (isEmpty(user)) {
      AuthService.getCurrentAuthenticatedUsername()
        .then((response) => {
          setUser(response);
        })
        .catch((error) => {
          localStorage.removeItem("user_access");
          localStorage.removeItem("user_refresh");

          history.push("/login");

          window.location.reload();
        });
    }

    if (!localStorage.getItem("user_access")) {
      localStorage.removeItem("user_access");

      localStorage.removeItem("user_refresh");

      history.push("/login");

      window.location.reload();
    }
  }

  useEffect(() => {
    fetchAuthenticatedUser();
    return () => {
      fetchAuthenticatedUser();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <Context.Provider value={user}>{props.children}</Context.Provider>;
};

export default UserContextProvider;
