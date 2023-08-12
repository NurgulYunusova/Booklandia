/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:8080/api/user/profile", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile", error);
        });

      setIsLoggedIn(true);
    }
  }, [token]);

  console.log("USER info: ", user?._id);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
