export const authorizationHeader = () => {
  const bearerToken =
    localStorage.getItem("user_t")
    ? atob(localStorage.getItem("user_t"))
    : "";

  return {
    "Authorization": `Bearer ${bearerToken}`
  };
}

export const refreshHeader = () => {
  const refreshBearerToken =
    localStorage.getItem("user_r")
    ? atob(localStorage.getItem("user_r"))
    : "";

  return {
    "Authorization": `Bearer ${refreshBearerToken}`
  };
};