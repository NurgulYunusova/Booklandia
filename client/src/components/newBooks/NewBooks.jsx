import "./newBooks.scss";
import img from "../../assets/images/BookDesign-Simple.png";
import CountdownTimer from "../countdownTimer/CountdownTimer";
import moment from "moment";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NewBooks() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  const endTime = moment().add(3, "day");

  useEffect(() => {
    axios.get("http://localhost:8080/api/book").then((res) => {
      const sortedBooks = res.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      const latestThreeBooks = sortedBooks.slice(0, 3);
      setBooks(latestThreeBooks);
    });
  }, []);

  const handleClick = () => {
    navigate("/books");
    window.scrollTo(0, 0);
  };

  const handleBookClick = (bookId) => {
    navigate(`/booksDetails/${bookId}`);
    window.scrollTo(0, 0);
  };

  function getRandomPrice() {
    const randomDollar = Math.floor(Math.random() * 100);
    const randomCent = Math.floor(Math.random() * 100);
    const price = `${randomDollar}.${randomCent < 10 ? "0" : ""}${randomCent}`;
    return price;
  }

  return (
    <>
      <div className="newBooks">
        <div className="newBooksContainer">
          <div className="heading">
            <h1>Deals Of The Week</h1>
            <div className="divider"></div>
            <button onClick={() => handleClick()}>VIEW ALL</button>
          </div>

          <div className="bottom">
            <div className="leftSide">
              <div className="image">
                <img src={img} alt="" />
              </div>
              <div className="texts">
                <div className="textsLeftSide">
                  <h6>NEW MONTH, NEW BOOKS</h6>
                  <h3>The Best New Books of August</h3>
                </div>
                <div className="textsRightSide">
                  <h5>Hurry the deals run out soon</h5>
                  <CountdownTimer endTime={endTime} />
                </div>
              </div>
            </div>

            <div className="rightSide">
              <div className="books">
                {books &&
                  books.map((q, key) => (
                    <div
                      className="book"
                      key={key}
                      onClick={() => handleBookClick(q._id)}
                    >
                      <div className="bookImage">
                        <img src={q.image} alt={q.image} />
                      </div>

                      <div className="bookInfo">
                        <p className="bookTitle">{q.name}</p>
                        <Rating
                          name="book-rating"
                          precision={0.5}
                          value={4.5}
                          sx={{ marginLeft: "-2px" }}
                          icon={
                            <StarRoundedIcon
                              style={{ color: "#de723c", fontSize: "16px" }}
                            />
                          }
                          emptyIcon={
                            <StarRoundedIcon
                              style={{ color: "#bab6b6", fontSize: "16px" }}
                            />
                          }
                          readOnly
                          // onChange={handleBookRatingChange}
                        />
                        <p className="bookAuthor">{q.author.name}</p>
                        <p className="price">${getRandomPrice()}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewBooks;
