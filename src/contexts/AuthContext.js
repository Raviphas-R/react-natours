import React, { createContext, useState, useEffect } from "react";
import { autoAuth, logOut, logIn } from "../API";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    const getUser = async () => {
      if (token && !user) {
        const userData = await autoAuth(token);
        setUser(userData);
      }
    };
    getUser();
    if (user && token) {
      navigate("/tours");
    }
  }, [token, user, navigate]);

  const login = async (userData) => {
    const response = await logIn(userData);
    const status = response.status;
    if (status === "success") {
      setUser(response.data.user);
      navigate("/tours");
    }
    return response;
  };

  const logout = async () => {
    const response = await logOut();
    setUser(null);
    navigate("/login");
    return response.data.status;
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
