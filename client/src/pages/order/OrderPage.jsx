import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import "./order.scss";
import { useContext, useState } from "react";
import { BasketContext } from "../../context/BasketContext";
import order from "../../assets/images/order.png";

function OrderPage() {
  const navigate = useNavigate();
  const { basket } = useContext(BasketContext);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/order-confirmation");
  };

  return (
    <>
      <Header />
      <Pages />
      <div className="order">
        <div className="orderContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>ORDER</p>
            </div>
          </div>

          <div className="bottom">
            <div className="bottomLeft">
              <h2>Shipping Information</h2>
              <p>Required fields are marked *</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={shippingInfo.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  required
                />

                <br />

                <div className="addressCity">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    placeholder="Address *"
                    required
                  />

                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    placeholder="City *"
                    required
                  />
                </div>

                <br />

                <div className="postalCodeCountry">
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={shippingInfo.postalCode}
                    onChange={handleInputChange}
                    placeholder="Postal Code *"
                    required
                  />

                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleInputChange}
                    placeholder="Country *"
                    required
                  />
                </div>

                <br />

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Message"
                ></textarea>

                <br />

                <button type="submit" className="submitButton">
                  Place Order
                </button>
              </form>
              {/* <div className="orderSummary">
              <h2>Order Summary</h2>
              <ul>
                {basket && basket.map((q) => <li key={q.id}>{q.name}</li>)}
              </ul>
            </div> */}
            </div>

            <div className="bottomRight">
              <img src={order} alt="Order image" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderPage;
