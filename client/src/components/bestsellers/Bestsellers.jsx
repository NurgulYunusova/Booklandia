import { useEffect, useState } from "react";
import "./bestsellers.scss";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";
import { useNavigate } from "react-router";

function Bestsellers() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/book")
      .then((res) => setBooks(res.data.slice(13, 16)));
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/booksDetails/${bookId}`);
    window.scrollTo(0, 0);
  };

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
    </>
  );
}

export default Bestsellers;
