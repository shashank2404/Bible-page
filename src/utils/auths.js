// Empty string = relative paths; works with Vite proxy in dev and same-origin in production
export const API_BASE = "";

export const saveToken = (token, name) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userName", name);
};

export const getToken = () => localStorage.getItem("token");

export const getUserName = () => localStorage.getItem("userName");

export const isLoggedIn = () => !!localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
};