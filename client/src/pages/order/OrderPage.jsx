import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import "./order.scss";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import order from "../../assets/images/order.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

function OrderPage() {
  const navigate = useNavigate();
  const { basket, removeFromBasket } = useContext(BasketContext);
  const { user } = useContext(UserContext);
  const { state } = useLocation();

  function generateRandomNumberString(length) {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  const randomNumberString = generateRandomNumberString(7);

  const orderSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    country: Yup.string().required("Country is required"),
  });

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      message: "",
    },
    validationSchema: orderSchema,
    onSubmit: async ({ address }) => {
      try {
        const booksData = basket.map((item) => ({
          book: item.book._id,
          quantity: item.quantity,
        }));

        const response = await axios.post("http://localhost:8080/api/order", {
          user: user._id,
          books: booksData,
          address: address,
          totalPrice: state,
          orderNumber: randomNumberString,
        });

        if (response.status === 201) {
          alert(response.data.message);
          clearBasket(booksData);
        }
      } catch (error) {
        alert(error);
      }
    },
  });

  const clearBasket = async (orderedBooks) => {
    try {
      for (const orderedBook of orderedBooks) {
        removeFromBasket(orderedBook.book);
      }
    } catch (error) {
      console.error("Error removing ordered books from basket:", error);
    }
  };

  return (
    <>
      {/* <Header />
      <Pages /> */}
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
                  value={values.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                />

                <br />

                <div className="addressCity">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    placeholder="Address *"
                    required
                  />

                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
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
                    value={values.postalCode}
                    onChange={handleChange}
                    placeholder="Postal Code *"
                    required
                  />

                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    placeholder="Country *"
                    required
                  />
                </div>

                <br />

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Message"
                  style={{ resize: "vertical" }}
                  value={values.message}
                  onChange={handleChange}
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
      {/* <Footer /> */}
    </>
  );
}

export default OrderPage;
