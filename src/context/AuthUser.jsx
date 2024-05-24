import { createContext, useEffect, useState } from "react";

export const AuthUserContext = createContext(null);

export const AuthUserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
      setIsLogged(true);
    }
  }, []);

  return (
    <AuthUserContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </AuthUserContext.Provider>
  );
};
