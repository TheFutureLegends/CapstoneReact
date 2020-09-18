import Cookies from "universal-cookie";

const cookies = new Cookies();

const authHeader = () => {
  const access = cookies.get("access_cookie");

  if (access) {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access,
    };
  } else {
    return {};
  }
};

const authBearerHeader = () => {
  const access = cookies.get("access_cookie");

  if (access) {
    return "Bearer " + access;
  } else {
    return null;
  }
};

export default {
  authHeader,
  authBearerHeader,
};
