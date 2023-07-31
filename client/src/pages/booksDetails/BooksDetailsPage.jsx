/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import img from "../../assets/images/anna_karenina.jpg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import "./booksdetails.scss";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function BooksDetailsPage() {
  const navigate = useNavigate();

  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setCurrentQuantity(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = currentQuantity + 1;
    setCurrentQuantity(newQuantity);
  };

  return (
    <>
      <div className="booksDetails">
        <div className="booksDetailsContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>ROMANCE</p>
              <i className="fa-solid fa-angle-right"></i>
              <p>ANNA KARENINA</p>
            </div>
          </div>

          <div className="bottom">
            <div className="left">
              <div className="bookImage">
                <img src={img} alt="Anna Karenina" />
              </div>
            </div>

            <div className="right">
              <div className="details">
                <div className="bookName">
                  <h1>ANNA KARENINA</h1>
                </div>

                <div className="bookAuthor">
                  <p>by Leo Tolstoy</p>
                </div>

                <div className="rating">
                  <Rating
                    name="book-rating"
                    precision={0.5}
                    value={4.5}
                    icon={<StarRoundedIcon style={{ color: "#de723c" }} />}
                    emptyIcon={<StarRoundedIcon style={{ color: "#bab6b6" }} />}
                    readOnly
                    // onChange={handleBookRatingChange}
                  />
                </div>

                <div className="description">
                  "Anna Karenina" is a classic novel written by Leo Tolstoy,
                  first published in 1877. It is regarded as one of the greatest
                  works of world literature. The novel tells the tragic story of
                  Anna Karenina, a married aristocrat and socialite in
                  19th-century Russia, and her passionate affair with Count
                  Alexei Vronsky. Set against the backdrop of Russian high
                  society, the novel explores themes of love, passion, morality,
                  family, and societal norms. Anna Karenina's affair with
                  Vronsky and the ensuing consequences challenge the rigid
                  social structure of the time and lead to heartbreak and
                  personal turmoil. The book delves into the complexities of
                  human relationships, the struggle between desire and duty, and
                  the consequences of individual choices. It also provides vivid
                  insights into the lives of various characters, including
                  Levin, a landowner, and his journey of self-discovery,
                  contrasting with Anna's tragic path. "Anna Karenina" is not
                  only a compelling love story but also a profound exploration
                  of human nature and society's expectations. Tolstoy's rich and
                  detailed narrative, along with his keen observations of human
                  behavior, has made this novel a timeless masterpiece that
                  continues to captivate readers across generations.
                </div>

                <hr style={{ margin: "20px 0" }} />

                <div className="quantity">
                  <h3>Quantity</h3>
                  <div className="quantityDiv">
                    <div className="quantityComponent">
                      <button onClick={handleDecrease}>-</button>
                      <span>{currentQuantity}</span>
                      <button onClick={handleIncrease}>+</button>
                    </div>

                    <button className="cart">
                      <AddShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
                      Add to cart
                    </button>

                    <button className="wishlist">
                      <FavoriteBorderOutlinedIcon sx={{ fontSize: "18px" }} />{" "}
                      Add to wishlist
                    </button>
                  </div>
                </div>

                <hr style={{ margin: "20px 0" }} />

                <div className="information">
                  <h4>
                    Category: <span>Romance</span>
                  </h4>
                  <h4>
                    ISBN: <span>9789754587029</span>
                  </h4>
                  <h4>
                    Pages: <span>240</span>
                  </h4>
                  <h4>
                    Language: <span>English</span>
                  </h4>
                </div>

                <div className="socialMediaIcons">
                  <ul>
                    <li className="facebook">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a
                        href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li className="pinterest">
                      <a
                        href="https://www.pinterest.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksDetailsPage;
