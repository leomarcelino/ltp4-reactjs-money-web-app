import jwtdecode from "jwt-decode";
export const TOKEN_KEY = "@money-web-app-Token";

export const isAuthenticated = () => {
  let token = localStorage.getItem(TOKEN_KEY);

  if (token) {
    token = jwtdecode(token);
  }

  const now = new Date().getTime() / 1000;

  console.log("Token", token);
  console.log("now", now);

  return token !== null && token.exp >= now;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
