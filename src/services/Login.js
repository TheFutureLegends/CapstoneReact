import React, { useState, useEffect, useCallback } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { baseApiUrl } from "services/Api.js";
import axios from "axios";

export const HandleLogin = (username, password) => {
  const [redirect, setRedirect] = useState(true);

  let history = useHistory();

  function handleRedirect(redirect) {}

  axios
    .post(baseApiUrl + "/token/", {
      username: username,
      password: password,
    })
    .then((res) => {
      setRedirect(true);
    })
    .catch((error) => {
      console.log(error);
    });

  useCallback(() => {
    if (redirect) {
      //   history.push("/");
      return <Redirect to="/" />;
    }
  });

  useEffect(() => {
    handleRedirect(redirect);

    return handleRedirect;
  }, []);
};

// export default HandleLogin;
