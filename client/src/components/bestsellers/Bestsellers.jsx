import { useContext, useEffect, useState } from "react";
import "./bestsellers.scss";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useNavigate } from "react-router";
import { BookContext } from "../../context/BookContext";

function Bestsellers() {
  const navigate = useNavigate();
  const { books } = useContext(BookContext);
  const [bestsellerBooks, setBestsellerBooks] = useState([]);

  useEffect(() => {
    if (books) {
      const sortedBooks = books.sort((a, b) => {
        if (b.averageRating === a.averageRating) {
          return a.name.localeCompare(b.name);
        }
        return b.averageRating - a.averageRating;
      });

      setBestsellerBooks(sortedBooks.slice(0, 3));
    }
  }, [books]);

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
            {bestsellerBooks &&
              bestsellerBooks.map((q, key) => (
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
