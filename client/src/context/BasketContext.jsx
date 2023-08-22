/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-hot-toast";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [basket, setBasket] = useState([]);
  const [bookQuantities, setBookQuantities] = useState({});
  const [basketClicked, setBasketClicked] = useState(false);

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
          toast.success(response.data.message);
          setBookQuantities((prevQuantities) => ({
            ...prevQuantities,
            [bookId]: quantity,
          }));
          setBasketClicked(true);
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
        setBasketClicked(false);
      }

      toast.success(response.data.message);
      getBasket();
    } catch (error) {
      console.error("Error removing item from basket:", error);
    }
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
        basketClicked,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
