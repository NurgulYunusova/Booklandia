/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "./wishlistPage.scss";
import WishlistTable from "../../components/wishlistTable/WishlistTable";
import { useState } from "react";

function WishlistPage() {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Book One",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$19.99",
      addedDate: "2023-07-25",
    },
    {
      id: 2,
      name: "Book Two",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$12.50",
      addedDate: "2023-07-24",
    },
    {
      id: 3,
      name: "Book One",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$19.99",
      addedDate: "2023-07-25",
    },
    {
      id: 4,
      name: "Book Two",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$12.50",
      addedDate: "2023-07-24",
    },
    {
      id: 5,
      name: "Book One",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$19.99",
      addedDate: "2023-07-25",
    },
    {
      id: 6,
      name: "Book Two",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$12.50",
      addedDate: "2023-07-24",
    },
    {
      id: 7,
      name: "Book One",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$19.99",
      addedDate: "2023-07-25",
    },
    {
      id: 8,
      name: "Book Two",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$12.50",
      addedDate: "2023-07-24",
    },
    {
      id: 9,
      name: "Book One",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$19.99",
      addedDate: "2023-07-25",
    },
    {
      id: 10,
      name: "Book Two",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      price: "$12.50",
      addedDate: "2023-07-24",
    },
  ]);

  const handleAddToCart = (itemId) => {
    // Implement your logic to add the item to the cart
    console.log(`Adding item with ID ${itemId} to the cart.`);
  };

  const handleDeleteItem = (itemId) => {
    // Filter out the item with the given ID and update the wishlist
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlist);
  };

  return (
    <>
      <div className="wishlist">
        <div className="wishlistContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>WISHLIST</p>
            </div>
          </div>

          <WishlistTable
            wishlistItems={wishlistItems}
            handleAddToCart={handleAddToCart}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </>
  );
}

export default WishlistPage;
