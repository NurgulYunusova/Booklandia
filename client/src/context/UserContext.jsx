/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const handlerLogInOut = (status, redirect, user = null) => {
    setIsLoggedIn(status);
    setUser(user);

    if (status) {
      localStorage.setItem("userId", JSON.stringify(user._id));
    } else {
      localStorage.removeItem("userId");
    }

    redirect();
  };

  console.log(user);

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, handlerLogInOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
