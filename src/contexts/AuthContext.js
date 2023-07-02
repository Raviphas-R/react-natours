import React, { createContext, useState, useEffect } from "react";
import { autoAuth } from "../API";
import { Cookies } from "react-cookie";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    const fetchUser = async () => {
      if (token && !user) {
        const userData = await autoAuth(token);
        console.log(userData);
        setUser(userData);
      }
    };

    fetchUser();
  }, [token, user]);

  const login = (userData) => {
    // Perform authentication logic here
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic here
    setUser(null);
  };

  // Pass the user and login/logout functions as the context value
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
