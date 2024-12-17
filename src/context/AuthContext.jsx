import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create Context
const AuthContext = createContext();

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Login Function
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    navigate("/profile"); // Redirect to Profile
  };

  // Logout Function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login"); // Redirect to Login
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
