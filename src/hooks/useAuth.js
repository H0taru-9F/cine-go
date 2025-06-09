import { useCallback, useState } from "react";
import { TOKEN_KEY } from "@/constants";

const USER_KEY = "user";

const useAuth = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(USER_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

  const login = useCallback((userData, authToken) => {
    const userToStore = { ...userData, role: userData.role };
    localStorage.setItem(USER_KEY, JSON.stringify(userToStore));
    setUser(userToStore);

    localStorage.setItem(TOKEN_KEY, authToken);
    setToken(authToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(USER_KEY);
    setUser(null);

    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  }, []);

  const isAuthenticated = useCallback(() => {
    return !!token;
  }, [token]);

  return {
    user,
    token,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
