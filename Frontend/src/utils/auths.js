export const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" 
  ? "http://localhost:5000" 
  : "https://backend.thebibleglory.com";

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