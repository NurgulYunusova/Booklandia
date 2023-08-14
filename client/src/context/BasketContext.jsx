/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [bookQuantities, setBookQuantities] = useState({});
  const { user } = useContext(UserContext);

  const addToBasket = async (bookId, quantity) => {
    try {
      setBasket([...basket, { _id: bookId, productId: bookId }]);

      axios
        .post("http://localhost:8080/api/basket", {
          userId: user._id,
          bookId: bookId,
          quantity: quantity,
        })
        .then((response) => {
          alert(response.data.message);
          setBookQuantities((prevQuantities) => ({
            ...prevQuantities,
            [bookId]: quantity,
          }));
          getBasket();
        })
        .catch((error) => {
          console.error("Error adding item to basket:", error);
          setBasket(basket.filter((item) => item._id !== bookId));
        });
    } catch (error) {
      console.error("Error adding item to basket:", error);
    }
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
      }

      alert(response.data.message);
      getBasket();
    } catch (error) {
      console.error("Error removing item from basket:", error);
    }
  };

  const getBasket = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/basket/${user._id}`
      );
      setBasket(response.data.basket);
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
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
