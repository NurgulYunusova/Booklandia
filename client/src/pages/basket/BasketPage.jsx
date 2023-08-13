import "./basketPage.scss";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import BasketTable from "../../components/basketTable/BasketTable";

function BasketPage() {
  const navigate = useNavigate();

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
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>CART</p>
            </div>
          </div>

          <BasketTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BasketPage;
