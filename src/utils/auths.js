export const API_BASE = "http://localhost:5000";

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