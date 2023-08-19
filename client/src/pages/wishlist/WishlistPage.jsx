import { useNavigate } from "react-router-dom";
import "./wishlist.scss";
import WishlistTable from "../../components/wishlistTable/WishlistTable";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";

function WishlistPage() {
  const navigate = useNavigate();
  const { wishlist } = useContext(WishlistContext);

  return (
    <>
      <Header />
      <Pages />
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
          {wishlist.length == 0 ? (
            <h1 className="noWishlist">There is no product in your wishlist</h1>
          ) : (
            <WishlistTable />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WishlistPage;
