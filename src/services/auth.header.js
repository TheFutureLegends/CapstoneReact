const authHeader = () => {
  const access = localStorage.getItem("user_access");

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
  const access = localStorage.getItem("user_access");

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
