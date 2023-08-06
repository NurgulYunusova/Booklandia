import { useNavigate, useParams } from "react-router-dom";
import "./authorDetails.scss";
import Rating from "@mui/material/Rating";
import img from "../../assets/images/anna_karenina.jpg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";
import { useEffect, useState } from "react";

function AuthorDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/author/${id}`)
      .then((res) => setAuthor(res.data));
  }, [id]);

  return (
    <>
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
              <div className="book">
                <div className="bookInfo">
                  <p className="title">Anna Karenina</p>
                  <p className="author">Leo Tolstoy</p>
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
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorDetailsPage;