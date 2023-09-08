/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import "./booksdetails.scss";
import { useContext, useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Comment from "../../components/comment/Comment";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Pages from "../../components/pages/Pages";
import Header from "../../components/header/Header";
import { WishlistContext } from "../../context/WishlistContext";
import Loading from "../../components/loading/Loading";
import { BasketContext } from "../../context/BasketContext";

function BooksDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, wishlist } =
    useContext(WishlistContext);
  const { addToBasket, removeFromBasket, basket } = useContext(BasketContext);
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isInBasket, setIsInBasket] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

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

  useEffect(() => {
    async function getBooksDetails() {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/book/${id}`
        );

        if (response.status == 200) {
          setBook(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getBooksDetails();
  }, [id]);

  useEffect(() => {
    if (book) {
      axios.get("http://localhost:8080/api/book").then((res) => {
        const filteredRelatedBooks = res.data.filter(
          (relatedBook) =>
            relatedBook.category._id === book.category._id &&
            relatedBook._id !== book._id
        );
        setRelatedBooks(filteredRelatedBooks);
      });
    }
  }, [book]);

  useEffect(() => {
    const bookInBasket = basket.some((item) => item.book?._id === book?._id);
    setIsInBasket(bookInBasket);
  }, [book, basket]);

  useEffect(() => {
    const bookInWishlist = wishlist.some(
      (item) => item.book?._id === book?._id
    );
    setIsInWishlist(bookInWishlist);
  }, [book, wishlist]);

  const handleBookClick = (bookId) => {
    navigate(`/booksDetails/${bookId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <Header />
          <Pages /> */}

          <div className="booksDetails">
            <div className="booksDetailsContainer">
              <div className="top">
                <div className="breadCrumb">
                  <i
                    className="fa-solid fa-house"
                    onClick={() => navigate("/")}
                  ></i>
                  <i className="fa-solid fa-angle-right"></i>
                  <p>{book.category.name}</p>
                  <i className="fa-solid fa-angle-right"></i>
                  <p>{book.name}</p>
                </div>
              </div>

              <div className="middle">
                <div className="left">
                  <div className="bookImage">
                    <img
                      src={`http://localhost:8080/${book.image}`}
                      alt={book.name}
                    />
                  </div>
                </div>

                <div className="right">
                  <div className="details">
                    <div className="bookName">
                      <h1>{book.name}</h1>
                    </div>

                    <div className="bookAuthor">
                      <p>by {book.author.name}</p>
                    </div>

                    <div className="rating">
                      <Rating
                        name="book-rating"
                        precision={0.5}
                        value={book.averageRating}
                        icon={
                          <StarRoundedIcon
                            style={{ color: "#de723c" }}
                            className="stars"
                          />
                        }
                        emptyIcon={
                          <StarRoundedIcon
                            style={{ color: "#bab6b6" }}
                            className="stars"
                          />
                        }
                        readOnly
                      />
                    </div>

                    <div className="description">{book.description}</div>

                    <hr style={{ margin: "20px 0" }} />

                    <div className="quantity">
                      <h3>Quantity</h3>
                      <div className="quantityDiv">
                        <div className="quantityComponent">
                          <button onClick={handleDecrease}>-</button>
                          <span>{currentQuantity}</span>
                          <button onClick={handleIncrease}>+</button>
                        </div>

                        {!isInBasket ? (
                          <button
                            className="cart"
                            onClick={() =>
                              addToBasket(book._id, currentQuantity)
                            }
                          >
                            <AddShoppingCartOutlinedIcon
                              sx={{ fontSize: "20px" }}
                            />
                            ADD TO CART
                          </button>
                        ) : (
                          <button
                            className="cart"
                            onClick={() => removeFromBasket(book._id)}
                          >
                            <RemoveShoppingCartOutlinedIcon
                              sx={{ fontSize: "20px" }}
                            />
                            REMOVE FROM CART
                          </button>
                        )}

                        {!isInWishlist ? (
                          <button
                            className="wishlist"
                            onClick={() => addToWishlist(book._id)}
                          >
                            <FavoriteBorderOutlinedIcon
                              sx={{ fontSize: "18px" }}
                            />{" "}
                            Add to wishlist
                          </button>
                        ) : (
                          <button
                            className="wishlist"
                            onClick={() => removeFromWishlist(book._id)}
                          >
                            <FavoriteIcon
                              sx={{
                                fontSize: "18px",
                                color: "#003366",
                              }}
                            />{" "}
                            Remove from wishlist
                          </button>
                        )}
                      </div>
                    </div>

                    <hr style={{ margin: "20px 0" }} />

                    <div className="information">
                      <h4>
                        Category: <span>{book.category.name}</span>
                      </h4>
                      <h4>
                        ISBN: <span>{book.isbn}</span>
                      </h4>
                      <h4>
                        Pages: <span>{book.pages}</span>
                      </h4>
                      <h4>
                        Language: <span>{book.language}</span>
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

              <div className="bottom">
                <Comment />
              </div>

              <div className="relatedBooks">
                <div className="heading">
                  <h1>Related Books</h1>
                  <div className="divider"></div>
                </div>
                <div className="books">
                  {relatedBooks &&
                    relatedBooks.map((q, key) => (
                      <div
                        className="book"
                        key={key}
                        onClick={() => handleBookClick(q._id)}
                      >
                        <div className="bookInfo">
                          <p className="title">{q.name}</p>
                          <p className="author">{q.author.name}</p>
                          <Rating
                            name="book-rating"
                            precision={0.5}
                            value={q.averageRating}
                            icon={
                              <StarRoundedIcon
                                style={{ color: "#de723c", fontSize: "20px" }}
                              />
                            }
                            emptyIcon={
                              <StarRoundedIcon
                                style={{ color: "#bab6b6", fontSize: "20px" }}
                              />
                            }
                            readOnly
                          />
                        </div>
                        <div className="bookImage">
                          <img
                            src={`http://localhost:8080/${q.image}`}
                            alt={q.name}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

export default BooksDetailsPage;
