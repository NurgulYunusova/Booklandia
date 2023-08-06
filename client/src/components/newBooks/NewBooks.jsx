import "./newBooks.scss";
import img from "../../assets/images/BookDesign-Simple.png";
import CountdownTimer from "../countdownTimer/CountdownTimer";
import moment from "moment";
import book from "../../assets/images/anna_karenina.jpg";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useNavigate } from "react-router-dom";

function NewBooks() {
  const navigate = useNavigate();
  const endTime = moment().add(3, "day");

  const handleClick = () => {
    navigate("/books");
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
                <div className="book">
                  <div className="bookImage">
                    <img src={book} alt="" />
                  </div>

                  <div className="bookInfo">
                    <p className="bookTitle">Anna Karenina</p>
                    <Rating
                      name="book-rating"
                      precision={0.5}
                      value={4.5}
                      sx={{ marginLeft: "-2px" }}
                      icon={
                        <StarRoundedIcon
                          style={{ color: "#de723c", fontSize: "16px" }}
                        />
                      } // Change the star icon color
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "16px" }}
                        />
                      }
                      readOnly
                      // onChange={handleBookRatingChange}
                    />
                    <p className="bookAuthor">LEO TOLSTOY</p>
                    <p className="price">$50.89</p>
                  </div>
                </div>

                <div className="book">
                  <div className="bookImage">
                    <img src={book} alt="" />
                  </div>

                  <div className="bookInfo">
                    <p className="bookTitle">Anna Karenina</p>
                    <Rating
                      name="book-rating"
                      precision={0.5}
                      value={4.5}
                      sx={{ marginLeft: "-2px" }}
                      icon={
                        <StarRoundedIcon
                          style={{ color: "#de723c", fontSize: "16px" }}
                        />
                      } // Change the star icon color
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "16px" }}
                        />
                      }
                      readOnly
                      // onChange={handleBookRatingChange}
                    />
                    <p className="bookAuthor">LEO TOLSTOY</p>
                    <p className="price">$50.89</p>
                  </div>
                </div>

                <div className="book">
                  <div className="bookImage">
                    <img src={book} alt="" />
                  </div>

                  <div className="bookInfo">
                    <p className="bookTitle">Anna Karenina</p>
                    <Rating
                      name="book-rating"
                      precision={0.5}
                      value={4.5}
                      sx={{ marginLeft: "-2px" }}
                      icon={
                        <StarRoundedIcon
                          style={{ color: "#de723c", fontSize: "16px" }}
                        />
                      } // Change the star icon color
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "16px" }}
                        />
                      }
                      readOnly
                      // onChange={handleBookRatingChange}
                    />
                    <p className="bookAuthor">LEO TOLSTOY</p>
                    <p className="price">$50.89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewBooks;
