/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(UserContext);
  const [wishlistTrueAlertOpen, setWishlistTrueAlertOpen] = useState(false);
  const [wishlistRemoveAlertOpen, setWishlistRemoveAlertOpen] = useState(false);

  const [wishlistFalseAlertOpen, setWishlistFalseAlertOpen] = useState(false);

  const addToWishlist = async (bookId) => {
    try {
      const response = await axios.post("http://localhost:8080/api/wishlist", {
        userId: user._id,
        bookId: bookId,
      });

      if (response.status === 201) {
        setWishlist([...wishlist, { _id: bookId, productId: bookId }]);
        setWishlistTrueAlertOpen(true);
        getWishlist();
      } else if (
        response.status === 400 &&
        response.data.message === "Book already in wishlist"
      ) {
        console.log("Book already in wishlist");
      } else {
        console.log("Failed to add book to wishlist");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error adding book to wishlist:", error);
        if (error.response && error.response.status === 400) {
          setWishlistFalseAlertOpen(true);
        }
      } else {
        console.error("Non-Axios error:", error);
      }
    }
  };

  const handleCloseTrueWishlistAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWishlistTrueAlertOpen(false);
  };

  const handleCloseFalseWishlistAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWishlistFalseAlertOpen(false);
  };

  const removeFromWishlist = async (bookId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/wishlist/${bookId}`,
        {
          data: { userId: user._id },
        }
      );

      if (response.status === 200) {
        setWishlist(wishlist.filter((item) => item._id !== bookId));
        setWishlistRemoveAlertOpen(true);
        getWishlist();
      }
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  const handleCloseRemoveWishlistAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWishlistRemoveAlertOpen(false);
  };

  const getWishlist = async () => {
    try {
      if (user) {
        const response = await axios.get(
          `http://localhost:8080/api/wishlist/${user._id}`
        );
        setWishlist(response.data.wishlist);
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, [user]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, addToWishlist, removeFromWishlist }}
    >
      {children}

      <Snackbar
        open={wishlistTrueAlertOpen}
        autoHideDuration={3000}
        onClose={handleCloseTrueWishlistAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseTrueWishlistAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Book added to wishlist!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={wishlistRemoveAlertOpen}
        autoHideDuration={3000}
        onClose={handleCloseRemoveWishlistAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseRemoveWishlistAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Book removed from wishlist!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={wishlistFalseAlertOpen}
        autoHideDuration={3000}
        onClose={handleCloseFalseWishlistAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseFalseWishlistAlert}
          severity="error"
          sx={{ width: "100%" }}
        >
          Book already in wishlist!
        </MuiAlert>
      </Snackbar>
    </WishlistContext.Provider>
  );
};
