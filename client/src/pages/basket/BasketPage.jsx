import "./basket.scss";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import BasketTable from "../../components/basketTable/BasketTable";
import { BasketContext } from "../../context/BasketContext";
import { useContext } from "react";

function BasketPage() {
  const navigate = useNavigate();
  const { basket } = useContext(BasketContext);

  const handleHomePageClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <Pages />
      <div className="basket">
        <div className="basketContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={handleHomePageClick}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>CART</p>
            </div>
          </div>

          {basket.length == 0 ? (
            <h1 className="noCart">There is no product in your cart</h1>
          ) : (
            <BasketTable />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BasketPage;
