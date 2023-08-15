/* eslint-disable no-unused-vars */
import { useNavigate, useLocation } from "react-router-dom";
import "./books.scss";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Pages from "../../components/pages/Pages";
import Header from "../../components/header/Header";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Loading from "../../components/loading/Loading";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BooksPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedCategoryFromLocation =
    location.state?.selectedCategory || "All";

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryFromLocation
  );
  const [selectedAuthor, setSelectedAuthor] = useState("All");
  const [selectedSorting, setSelectedSorting] = useState("1");
  const [isLoading, setIsLoading] = useState(true);

  const filteredItems = books
    .filter(
      (item) =>
        (selectedCategory === "All" ||
          item.category.name === selectedCategory) &&
        (selectedAuthor === "All" || item.author.name === selectedAuthor)
    )
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

    async function getBooks() {
      await axios
        .get("http://localhost:8080/api/book")
        .then((res) => setBooks(res.data));

      setIsLoading(false);
    }

    getCategories();
    getAuthors();
    getBooks();
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

                  <div className="books">
                    {filteredItems &&
                      filteredItems.map((q, key) => (
                        <div
                          className="book"
                          key={key}
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
                                  style={{ color: "#de723c", fontSize: "20px" }}
                                />
                              }
                              emptyIcon={
                                <StarRoundedIcon
                                  style={{ color: "#bab6b6", fontSize: "20px" }}
                                />
                              }
                              readOnly
                            />
                            <p className="bookAuthor">{q.author.name}</p>
                            <p className="price">${q.price}</p>
                          </div>
                        </div>
                      ))}
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
