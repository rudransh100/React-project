import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email, password) => {

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      localStorage.setItem("user", JSON.stringify(validUser));
      setUser(validUser);
      return true;
    }

    return false;
  };

  const signup = (email, password) => {

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = { email, password };

    storedUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(storedUsers));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};