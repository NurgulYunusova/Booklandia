/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginTrueAlertOpen, setLoginTrueAlertOpen] = useState(false);

  const token = localStorage.getItem("token");

  const updateUser = async () => {
    if (token) {
      axios
        .get("http://localhost:8080/api/user/profile", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoginTrueAlertOpen(true);
        })
        .catch((error) => {
          console.error("Error fetching user profile", error);
        });

      setIsLoggedIn(true);
    }
  };

  const handleCloseTrueLoginAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLoginTrueAlertOpen(false);
  };

  useEffect(() => {
    updateUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, updateUser }}
    >
      {children}

      <Snackbar
        open={loginTrueAlertOpen}
        autoHideDuration={3000}
        onClose={handleCloseTrueLoginAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseTrueLoginAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          You have successfully logged in!
        </MuiAlert>
      </Snackbar>
    </UserContext.Provider>
  );
};
