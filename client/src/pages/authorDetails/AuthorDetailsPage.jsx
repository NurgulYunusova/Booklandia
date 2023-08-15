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

  console.log(author);

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
                <img
                  src={`http://localhost:8080/${author.image}`}
                  alt={author.name}
                />
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
              {author.booksWithAverageRating &&
                author.booksWithAverageRating.map((q, key) => (
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
      <Footer />
    </>
  );
}

export default AuthorDetailsPage;
