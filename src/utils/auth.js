const TOKEN_KEY = "auth_token";

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setAuthData = (token) => {
  localStorage.setItem(TOKEN_KEY, token.token);
};

export const clearAuthData = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};
