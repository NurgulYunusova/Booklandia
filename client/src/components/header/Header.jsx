/* eslint-disable no-unused-vars */
import "./header.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { BookContext } from "../../context/BookContext";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

function Header() {
  const navigate = useNavigate();
  const { books } = useContext(BookContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchClick, setSearchClick] = useState(false);
  const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
    setLogoutAlertOpen(true);
    window.scrollTo(0, 0);
  };

  const submitSearch = () => {
    setSearchClick(true);

    if (searchValue === "") {
      setFilteredBooks("");
      return;
    }

    const result = books.filter((book) => {
      if (book.name.toLowerCase().includes(searchValue)) {
        return book;
      }
    });

    setFilteredBooks(result);
  };

  const submitClose = () => {
    setSearchClick(false);
    setSearchValue("");
  };

  const handleBookClick = (bookId) => {
    navigate(`/booksDetails/${bookId}`);
    window.scrollTo(0, 0);
  };

  const handleCartClick = () => {
    navigate("/cart");
    window.scrollTo(0, 0);
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
    window.scrollTo(0, 0);
  };

  const handleCloseLogoutAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLogoutAlertOpen(false);
  };

  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="logo">
            <h1 onClick={() => navigate("/")}>Booklandia.</h1>
          </div>

          <div className="search">
            <div className="searchBar">
              <input
                type="text"
                placeholder="Search for books..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              />
              <div className="icons">
                {searchClick ? (
                  <i className="fa-solid fa-xmark" onClick={submitClose}></i>
                ) : null}
                <i className="fas fa-search" onClick={submitSearch}></i>
              </div>
            </div>

            {searchClick ? (
              <div className="searchResult">
                <ul>
                  {filteredBooks.length == 0 ? (
                    <li>There is no such book</li>
                  ) : (
                    filteredBooks.map((q, key) => (
                      <li key={key} onClick={() => handleBookClick(q._id)}>
                        <img
                          src={`${import.meta.env.VITE_SERVER_URL}/${q.image}`}
                          alt={q.name}
                        />
                        <div className="infos">
                          <h4 className="title">{q.name}</h4>
                          <h4 className="author">{q.author.name}</h4>
                          <div className="rating">
                            <Rating
                              name="book-rating"
                              precision={0.5}
                              value={q.averageRating}
                              sx={{ marginLeft: "-2px" }}
                              icon={
                                <StarRoundedIcon
                                  style={{ color: "#de723c", fontSize: "15px" }}
                                />
                              }
                              emptyIcon={
                                <StarRoundedIcon
                                  style={{ color: "#bab6b6", fontSize: "15px" }}
                                />
                              }
                              readOnly
                            />
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>

          {isLoggedIn ? (
            <div className="userIcons">
              <span onClick={() => handleWishlistClick()}>
                <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
                WISHLIST
              </span>
              <span className="cart" onClick={() => handleCartClick()}>
                <AddShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />
                CART
              </span>
              <span onClick={() => navigate("/profilePage")}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: "23px" }} />
                ACCOUNT
              </span>
              <span onClick={() => handleLogOut()}>
                <LogoutOutlinedIcon sx={{ fontSize: "30px" }} />
              </span>
            </div>
          ) : (
            <div className="authButtons">
              <button
                className="loginButton"
                onClick={() => navigate("/login")}
              >
                LOG IN
              </button>
              <button
                className="registerButton"
                onClick={() => navigate("/register")}
              >
                REGISTER
              </button>
            </div>
          )}

          <Snackbar
            open={logoutAlertOpen}
            autoHideDuration={3000}
            onClose={handleCloseLogoutAlert}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <MuiAlert
              onClose={handleCloseLogoutAlert}
              severity="success"
              sx={{ width: "100%" }}
            >
              You have successfully logged out!
            </MuiAlert>
          </Snackbar>
        </div>
      </header>
    </>
  );
}

export default Header;
