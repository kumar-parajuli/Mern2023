import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

//create provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");
  const authorizationToken = `Bearer ${token}`;
  //reuseable function
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken); //remove the problem while loin page should be refress
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
    user,
    services,
    authorizationToken,
  };

  //JWT AUTHENTICATION -- TO GET THE CURRENTLY LOGIN USER DATA
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };
  //to fetch the services data from the database
  const getServiceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data);
        // console.log(data);
      }
    } catch (error) {
      console.log(`Services frontend error:${error}`);
    }
  };
  useEffect(() => {
    getServiceData();
    userAuthentication();
  }, []);

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
