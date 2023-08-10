/* eslint-disable no-unused-vars */
import "./header.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="logo">
            <h1 onClick={() => navigate("/")}>Booklandia.</h1>
          </div>

          <div className="searchBar">
            <input type="text" placeholder="Search for books..." />
            <i className="fas fa-search"></i>
          </div>

          {isLoggedIn ? (
            <div className="userIcons">
              <span onClick={() => navigate("/wishlist")}>
                <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
                WISHLIST
              </span>
              <span className="cart" onClick={() => navigate("/basket")}>
                <AddShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />
                CART
              </span>
              <span onClick={() => navigate("/profilePage")}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: "23px" }} />
                ACCOUNT
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
        </div>
      </header>
    </>
  );
}

export default Header;
