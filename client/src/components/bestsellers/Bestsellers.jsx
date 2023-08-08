import { useEffect, useState } from "react";
import "./bestsellers.scss";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";

function Bestsellers() {
  // const [bookRating, setBookRating] = useState(0);

  // // Function to handle the book rating change
  // const handleBookRatingChange = (event, newRating) => {
  //   setBookRating(newRating);
  // };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/book")
      .then((res) => setBooks(res.data.slice(13, 16)));
  }, []);

  return (
    <>
      <div className="bestsellers">
        <div className="bestsellersContainer">
          <div className="heading">
            <h1>Bestseller books of the month</h1>
          </div>

          <div className="books">
            {books &&
              books.map((q, key) => (
                <div className="book" key={key}>
                  <div className="bookInfo">
                    <p className="title">{q.name}</p>
                    <p className="author">{q.author.name}</p>
                    <Rating
                      name="book-rating"
                      precision={0.5}
                      value={4.5}
                      sx={{ marginLeft: "-2px" }}
                      icon={<StarRoundedIcon style={{ color: "#de723c" }} />}
                      emptyIcon={
                        <StarRoundedIcon style={{ color: "#bab6b6" }} />
                      }
                      readOnly
                      // onChange={handleBookRatingChange}
                    />
                  </div>
                  <div className="bookImage">
                    <img src={q.image} alt={q.name} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bestsellers;
