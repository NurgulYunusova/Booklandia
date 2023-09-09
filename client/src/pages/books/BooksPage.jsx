import { useNavigate, useLocation } from "react-router-dom";
import "./books.scss";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Pages from "../../components/pages/Pages";
import Header from "../../components/header/Header";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Loading from "../../components/loading/Loading";
import { BookContext } from "../../context/BookContext";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";

function BooksPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { books } = useContext(BookContext);
  const { addToBasket, removeFromBasket, basket } = useContext(BasketContext);
  const { addToWishlist, removeFromWishlist, wishlist } =
    useContext(WishlistContext);

  const selectedCategoryFromLocation =
    location.state?.selectedCategory || "All";

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryFromLocation
  );
  const [selectedAuthor, setSelectedAuthor] = useState("All");
  const [selectedSorting, setSelectedSorting] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredItems = books
    .filter(
      (item) =>
        (selectedCategory === "All" ||
          item.category.name === selectedCategory) &&
        (selectedAuthor === "All" || item.author.name === selectedAuthor)
    )
    .filter((item) => {
      const itemPrice = item.price;
      const isWithinPriceRange =
        (minPrice === "" || itemPrice >= minPrice) &&
        (maxPrice === "" || itemPrice <= maxPrice);
      return isWithinPriceRange;
    })
    .sort((a, b) => {
      switch (selectedSorting) {
        case "1":
          return a.name.localeCompare(b.name);
        case "2":
          return b.name.localeCompare(a.name);
        case "3":
          return a.price - b.price;
        case "4":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  useEffect(() => {
    async function getCategories() {
      await axios
        .get("http://localhost:8080/api/category")
        .then((res) => setCategories(res.data));
    }

    async function getAuthors() {
      await axios
        .get("http://localhost:8080/api/author")
        .then((res) => setAuthors(res.data));
    }

    setIsLoading(false);

    getCategories();
    getAuthors();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/booksDetails/${bookId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Pages />

          <div className="books">
            <div className="booksContainer">
              <div className="top">
                <div className="breadCrumb">
                  <i
                    className="fa-solid fa-house"
                    onClick={() => navigate("/")}
                  ></i>
                  <i className="fa-solid fa-angle-right"></i>
                  <p>BOOKS</p>
                </div>
              </div>

              <div className="bottom">
                <div className="leftSection">
                  <div className="genres">
                    <h3>Genre</h3>
                    <div className="genresList">
                      <ul>
                        <li
                          onClick={() => setSelectedCategory("All")}
                          style={{
                            color:
                              selectedCategory === "All"
                                ? "#001a40"
                                : "#001a40aa",
                          }}
                        >
                          <div
                            className="square"
                            style={{
                              backgroundColor:
                                selectedCategory === "All"
                                  ? "#003366"
                                  : "transparent",
                            }}
                          ></div>
                          All
                        </li>
                        {categories &&
                          categories.map((q, key) => (
                            <li
                              key={key}
                              onClick={() => setSelectedCategory(q.name)}
                              style={{
                                color:
                                  selectedCategory === q.name
                                    ? "#001a40"
                                    : "#001a40aa",
                              }}
                            >
                              <div
                                className="square"
                                style={{
                                  backgroundColor:
                                    selectedCategory === q.name
                                      ? "#003366"
                                      : "transparent",
                                }}
                              ></div>
                              {q.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  <div className="authors">
                    <h3>Authors</h3>
                    <div className="authorsList">
                      <ul>
                        <li
                          onClick={() => setSelectedAuthor("All")}
                          style={{
                            color:
                              selectedAuthor === "All"
                                ? "#001a40"
                                : "#001a40aa",
                          }}
                        >
                          <div
                            className="square"
                            style={{
                              backgroundColor:
                                selectedAuthor === "All"
                                  ? "#003366"
                                  : "transparent",
                            }}
                          ></div>
                          All
                        </li>
                        {authors &&
                          authors.map((q, key) => (
                            <li
                              key={key}
                              onClick={() => setSelectedAuthor(q.name)}
                              style={{
                                color:
                                  selectedAuthor === q.name
                                    ? "#001a40"
                                    : "#001a40aa",
                              }}
                            >
                              <div
                                className="square"
                                style={{
                                  backgroundColor:
                                    selectedAuthor === q.name
                                      ? "#003366"
                                      : "transparent",
                                }}
                              ></div>
                              {q.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  <div className="filterByPrice">
                    <h3>Filter By Price</h3>
                    <input
                      type="number"
                      placeholder="Min Price"
                      value={minPrice}
                      className="minPrice"
                      min={0}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Max Price"
                      value={maxPrice}
                      className="maxPrice"
                      max={200}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="rightSection">
                  <div className="dropdown">
                    <h3>Sort by: </h3>
                    <select
                      onChange={(e) => setSelectedSorting(e.target.value)}
                      value={selectedSorting}
                    >
                      <option value="1" defaultValue>
                        Product Name (A-Z)
                      </option>
                      <option value="2">Product Name (Z-A)</option>
                      <option value="3">Price (Low to High)</option>
                      <option value="4">Price (High to Low)</option>
                    </select>
                  </div>

                  <div className="booksShop">
                    {filteredItems &&
                      filteredItems.map((q, key) => {
                        const bookInBasket = basket.some(
                          (item) => item.book?._id === q._id
                        );

                        const bookInWishlist = wishlist.some(
                          (item) => item.book?._id === q?._id
                        );

                        return (
                          <div key={key} className="booksAndButtons">
                            <div
                              className="book"
                              onClick={() => handleBookClick(q._id)}
                            >
                              <div className="bookImage">
                                <img
                                  src={`http://localhost:8080/${q.image}`}
                                  alt={q.name}
                                />
                              </div>

                              <div className="bookInfo">
                                <p className="bookTitle">{q.name}</p>
                                <Rating
                                  name="book-rating"
                                  precision={0.5}
                                  value={q.averageRating}
                                  sx={{ marginLeft: "-2px" }}
                                  icon={
                                    <StarRoundedIcon
                                      style={{
                                        color: "#de723c",
                                      }}
                                      className="stars"
                                    />
                                  }
                                  emptyIcon={
                                    <StarRoundedIcon
                                      style={{
                                        color: "#bab6b6",
                                      }}
                                      className="stars"
                                    />
                                  }
                                  readOnly
                                />
                                <p className="bookAuthor">{q.author.name}</p>
                                <p className="price">${q.price}</p>
                              </div>
                            </div>

                            <div className="buttons">
                              {!bookInBasket ? (
                                <button
                                  className="cart"
                                  onClick={() => addToBasket(q._id, 1)}
                                  title="Add to cart"
                                >
                                  <AddShoppingCartOutlinedIcon className="buttonsIcons" />
                                </button>
                              ) : (
                                <button
                                  className="cart"
                                  onClick={() => removeFromBasket(q._id, 1)}
                                  title="Remove from cart"
                                >
                                  <RemoveShoppingCartOutlinedIcon className="buttonsIcons" />
                                </button>
                              )}

                              {!bookInWishlist ? (
                                <button
                                  className="fav"
                                  onClick={() => addToWishlist(q._id)}
                                  title="Add to wishlist"
                                >
                                  <FavoriteBorderOutlinedIcon className="buttonsIcons" />
                                </button>
                              ) : (
                                <button
                                  className="fav"
                                  onClick={() => removeFromWishlist(q._id)}
                                  title="Remove from wishlist"
                                >
                                  <FavoriteIcon className="buttonsIcons" />
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default BooksPage;
