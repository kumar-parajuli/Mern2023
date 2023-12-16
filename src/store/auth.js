import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

//create provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  //reuseable function
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  //showing enable if user is login dissable if user logout
  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  // for logout session
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token"); //removing token from local stroage
  };

  const contextValues = {
    isLoggedIn,
    storeTokenInLS,
    LogoutUser,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

///consumer for custom function
export const useAuth = () => {
  return useContext(AuthContext);
};
