/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(UserContext);

  const addToWishlist = async (bookId) => {
    try {
      setWishlist([...wishlist, { _id: bookId, productId: bookId }]);

      axios
        .post("http://localhost:8080/api/wishlist", {
          userId: user._id,
          bookId: bookId,
        })
        .then((response) => {
          alert(response.data.message);
          getWishlist();
        })
        .catch((error) => {
          console.error("Error adding item to wishlist:", error);
          setWishlist(wishlist.filter((item) => item._id !== bookId));
        });
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
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
      }

      alert(response.data.message);
      getWishlist();
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  const getWishlist = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/wishlist/${user._id}`
      );
      setWishlist(response.data.wishlist);
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
    </WishlistContext.Provider>
  );
};
