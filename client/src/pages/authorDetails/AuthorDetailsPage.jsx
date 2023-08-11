import { useNavigate, useParams } from "react-router-dom";
import "./authorDetails.scss";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";

function AuthorDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/author/${id}`)
      .then((res) => setAuthor(res.data));
  }, [id]);

  const handleBookClick = (bookId) => {
    navigate(`/booksDetails/${bookId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <Pages />
      <div className="authorDetails">
        <div className="authorDetailsContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p style={{ cursor: "auto" }}>PRODUCT BOOK AUTHOR</p>
              <i className="fa-solid fa-angle-right"></i>
              <p>{author.name}</p>
            </div>
          </div>

          <div className="middle">
            <div className="left">
              <div className="authorImage">
                <img src={author.image} alt={author.name} />
              </div>
            </div>

            <div className="right">
              <div className="details">
                <div className="authorName">
                  <h1>{author.name}</h1>
                </div>

                <div className="about">{author.about}</div>
              </div>
            </div>
          </div>

          <div className="relatedBooks">
            <div className="heading">
              <h1>Books By {author.name}</h1>
              <div className="divider"></div>
            </div>
            <div className="books">
              {author.authorBooks &&
                author.authorBooks.map((q, key) => (
                  <div
                    className="book"
                    key={key}
                    onClick={() => handleBookClick(q._id)}
                  >
                    <div className="bookInfo">
                      <p className="title">{q.name}</p>
                      <p className="author">{author.name}</p>
                      <Rating
                        name="book-rating"
                        precision={0.5}
                        value={4.5}
                        icon={
                          <StarRoundedIcon
                            style={{ color: "#de723c", fontSize: "20px" }}
                          />
                        } // Change the star icon color
                        emptyIcon={
                          <StarRoundedIcon
                            style={{ color: "#bab6b6", fontSize: "20px" }}
                          />
                        }
                        readOnly
                        // onChange={handleBookRatingChange}
                      />
                    </div>
                    <div className="bookImage">
                      <img src={q.image} alt="" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AuthorDetailsPage;
