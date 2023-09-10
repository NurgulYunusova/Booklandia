import "./newBooks.scss";
import img from "../../assets/images/BookDesign-Simple.png";
import CountdownTimer from "../countdownTimer/CountdownTimer";
import moment from "moment";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";

function NewBooks() {
  const navigate = useNavigate();
  const { books } = useContext(BookContext);
  const [newBooks, setNewBooks] = useState([]);

  const endTime = moment().add(3, "day");

  useEffect(() => {
    if (books) {
      const sortedBooks = books.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      const latestThreeBooks = sortedBooks.slice(0, 3);

      setNewBooks(latestThreeBooks);
    }
  }, [books]);

  const handleClick = () => {
    navigate("/books");
    window.scrollTo(0, 0);
  };

  const handleBookClick = (bookId) => {
    navigate(`/booksDetails/${bookId}`);
    window.scrollTo(0, 0);
  };

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
                {newBooks &&
                  newBooks.map((q, key) => (
                    <div
                      className="book"
                      key={key}
                      onClick={() => handleBookClick(q._id)}
                    >
                      <div className="bookImage">
                        <img
                          src={`http://localhost:8080/${q.image}`}
                          alt={q.image}
                        />
                      </div>

                      <div className="bookInfo">
                        <p className="bookTitle">{q.name}</p>
                        <Rating
                          name="book-rating"
                          precision={0.5}
                          value={q.averageRating}
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
                        />
                        <p className="bookAuthor">{q.author.name}</p>
                        <p className="price">${q.price}</p>
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
