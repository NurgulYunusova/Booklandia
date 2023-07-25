// import { useState } from "react";
import "./bestsellers.scss";
import Rating from "@mui/material/Rating";
import img from "../../assets/images/anna_karenina.jpg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Bestsellers() {
  // const [bookRating, setBookRating] = useState(0);

  // // Function to handle the book rating change
  // const handleBookRatingChange = (event, newRating) => {
  //   setBookRating(newRating);
  // };

  return (
    <>
      <div className="bestsellers">
        <div className="bestsellersContainer">
          <div className="heading">
            <h1>Bestseller books of the month</h1>
          </div>

          <div className="books">
            <div className="book">
              <div className="bookInfo">
                <p className="title">Anna Karenina</p>
                <p className="author">Leo Tolstoy</p>
                <Rating
                  name="book-rating"
                  precision={0.5}
                  value={4.5}
                  icon={<StarRoundedIcon style={{ color: "#de723c" }} />} // Change the star icon color
                  emptyIcon={<StarRoundedIcon style={{ color: "#bab6b6" }} />}
                  readOnly
                  // onChange={handleBookRatingChange}
                />
              </div>
              <div className="bookImage">
                <img src={img} alt="" />
              </div>
            </div>

            <div className="book">
              <div className="bookInfo">
                <p className="title">Anna Karenina</p>
                <p className="author">Leo Tolstoy</p>
                <Rating
                  name="book-rating"
                  precision={0.5}
                  value={4.5}
                  icon={<StarRoundedIcon style={{ color: "#de723c" }} />} // Change the star icon color
                  emptyIcon={<StarRoundedIcon style={{ color: "#bab6b6" }} />}
                  readOnly
                  // onChange={handleBookRatingChange}
                />
              </div>
              <div className="bookImage">
                <img src={img} alt="" />
              </div>
            </div>

            <div className="book">
              <div className="bookInfo">
                <p className="title">Anna Karenina</p>
                <p className="author">Leo Tolstoy</p>
                <Rating
                  name="book-rating"
                  precision={0.5}
                  value={4.5}
                  icon={<StarRoundedIcon style={{ color: "#de723c" }} />} // Change the star icon color
                  emptyIcon={<StarRoundedIcon style={{ color: "#bab6b6" }} />}
                  readOnly
                  // onChange={handleBookRatingChange}
                />
              </div>
              <div className="bookImage">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bestsellers;
