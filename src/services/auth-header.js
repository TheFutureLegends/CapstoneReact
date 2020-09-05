export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.access) {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.access,
    };
  } else {
    return false;
  }
}

export function authBearerHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.access) {
    return "Bearer " + user.access;
  } else {
    return {};
  }
}
