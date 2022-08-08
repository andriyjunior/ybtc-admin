const TOKEN_NAME = "jwt-access-token";

export const getToken = () => window.localStorage.getItem(TOKEN_NAME);

export const setToken = (token) =>
  window.localStorage.setItem(TOKEN_NAME, token);

export const clearToken = () => window.localStorage.removeItem(TOKEN_NAME);
