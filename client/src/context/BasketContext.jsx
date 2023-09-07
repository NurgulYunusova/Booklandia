/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [basket, setBasket] = useState([]);
  const [bookQuantities, setBookQuantities] = useState({});
  const [basketTrueAlertOpen, setBasketTrueAlertOpen] = useState(false);
  const [basketRemoveAlertOpen, setBasketRemoveAlertOpen] = useState(false);
  const [basketFalseAlertOpen, setBasketFalseAlertOpen] = useState(false);
  const [basketNeedLoginAlertOpen, setBasketNeedLoginAlertOpen] =
    useState(false);

  const addToBasket = async (bookId, quantity) => {
    try {
      if (!user) {
        setBasketNeedLoginAlertOpen(true);
        return;
      }

      const response = await axios.post("http://localhost:8080/api/basket", {
        userId: user._id,
        bookId: bookId,
        quantity: +quantity,
      });

      if (response.status === 201) {
        setBasket([...basket, { _id: bookId, productId: bookId }]);
        setBookQuantities((prevQuantities) => ({
          ...prevQuantities,
          [bookId]: quantity,
        }));
        setBasketTrueAlertOpen(true);
        getBasket();
      } else if (
        response.status === 400 &&
        response.data.message === "Book already in cart"
      ) {
        console.log("Book already in cart");
      } else {
        console.log("Failed to add book to cart");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error adding book to cart:", error);
        if (error.response && error.response.status === 400) {
          setBasketFalseAlertOpen(true);
        }
      } else {
        console.error("Non-Axios error:", error);
      }
    }
  };

  const handleCloseTrueBasketAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setBasketTrueAlertOpen(false);
  };

  const handleCloseFalseBasketAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setBasketFalseAlertOpen(false);
  };

  const updateQuantityOnServer = async (bookId, quantity) => {
    try {
      const basketItemToUpdate = basket.find(
        (item) => item.book._id === bookId
      );

      if (!basketItemToUpdate) {
        console.error("Basket item not found.");
        return;
      }

      const basketId = basketItemToUpdate._id;

      await axios.put(`http://localhost:8080/api/basket/${basketId}`, {
        quantity: quantity,
      });

      setBookQuantities((prevQuantities) => ({
        ...prevQuantities,
        [bookId]: quantity,
      }));
    } catch (error) {
      console.error("Error updating quantity on server:", error);
    }
  };

  const handleCloseNeedLoginBasketAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setBasketNeedLoginAlertOpen(false);
  };

  const removeFromBasket = async (bookId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/basket/${bookId}`,
        {
          data: { userId: user._id },
        }
      );

      if (response.status === 200) {
        setBasket(basket.filter((item) => item._id !== bookId));
        setBasketRemoveAlertOpen(true);
        getBasket();
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleCloseRemoveBasketAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setBasketRemoveAlertOpen(false);
  };

  const getBasket = async () => {
    try {
      if (user) {
        const response = await axios.get(
          `http://localhost:8080/api/basket/${user._id}`
        );
        setBasket(response.data.basket);
      }
    } catch (error) {
      console.error("Error fetching basket:", error);
    }
  };

  useEffect(() => {
    getBasket();
  }, [user]);

  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
        bookQuantities,
        setBookQuantities,
        addToBasket,
        removeFromBasket,
        updateQuantityOnServer,
      }}
    >
      {children}

      <Snackbar
        open={basketTrueAlertOpen}
        autoHideDuration={3000}
        onClose={handleCloseTrueBasketAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseTrueBasketAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Book added to cart!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={basketRemoveAlertOpen}
        autoHideDuration={3000}
        onClose={handleCloseRemoveBasketAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseRemoveBasketAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Book removed from cart!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={basketFalseAlertOpen}
        autoHideDuration={3000}
        onClose={handleCloseFalseBasketAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseFalseBasketAlert}
          severity="error"
          sx={{ width: "100%" }}
        >
          Book already in cart!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={basketNeedLoginAlertOpen}
        autoHideDuration={3000}
        onClose={handleCloseNeedLoginBasketAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseNeedLoginBasketAlert}
          severity="warning"
          sx={{ width: "100%" }}
        >
          You need to log in to add books to your basket!
        </MuiAlert>
      </Snackbar>
    </BasketContext.Provider>
  );
};
