import { useNavigate } from "react-router-dom";
import "./wishlistPage.scss";
import WishlistTable from "../../components/wishlistTable/WishlistTable";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";

function WishlistPage() {
  const navigate = useNavigate();

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

          <WishlistTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WishlistPage;
