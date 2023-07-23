/* eslint-disable no-unused-vars */
import "./header.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Header() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="logo">
            <h1>Booklandia.</h1>
          </div>

          <div className="searchBar">
            <input type="text" placeholder="Search for books..." />
            <i className="fas fa-search"></i>
          </div>

          <div className="authButtons">
            <button className="login">Log In</button>
            <button className="register">Register</button>
          </div>

          {/* <div className="userIcons">
            <span>
              <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
              WISHLIST
            </span>
            <span className="cart">
              <AddShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />
              CART
            </span>
            <span>
              <PersonOutlineOutlinedIcon sx={{ fontSize: "23px" }} />
              ACCOUNT
            </span>
          </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;
