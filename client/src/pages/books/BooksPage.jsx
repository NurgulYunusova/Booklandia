/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "./books.scss";
import book from "../../assets/images/anna_karenina.jpg";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function BooksPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/category")
      .then((res) => setCategories(res.data));

    axios
      .get("http://localhost:8080/api/author")
      .then((res) => setAuthors(res.data));

    setLoading(false);
  }, []);

  return (
    <>
      <div className="books">
        <div className="booksContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>BOOKS</p>
            </div>
          </div>

          <div className="bottom">
            <div className="leftSection">
              <div className="genres">
                <h3>Genre</h3>
                <div className="genresList">
                  {categories &&
                    categories.map((q, key) => (
                      <ul key={key}>
                        <li>
                          <div className="square"></div>
                          {q.name}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>

              <div className="authors">
                <h3>Authors</h3>
                <div className="authorsList">
                  <ul>
                    <li>
                      <div className="square"></div> Arthur Gonzalez
                    </li>
                    <li>
                      <div className="square"></div> Dana Chambers
                    </li>
                    <li>
                      <div className="square"></div> Ernesto Wade
                    </li>
                    <li>
                      <div className="square"></div> Karla Newman
                    </li>
                    <li>
                      <div className="square"></div> Misty Figueroa
                    </li>
                    <li>
                      <div className="square"></div> Rita James
                    </li>
                    <li>
                      <div className="square"></div> Suzanne Casey
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div class="price-content">
                <div>
                  <label>Min</label>
                  <p id="min-value">$50</p>
                </div>

                <div>
                  <label>Max</label>
                  <p id="max-value">$500</p>
                </div>
              </div>

              <div className="range-slider">
                <input
                  type="range"
                  className="min-price"
                  value="100"
                  min="10"
                  max="500"
                  step="10"
                />
                <input
                  type="range"
                  className="max-price"
                  value="250"
                  min="10"
                  max="500"
                  step="10"
                />
              </div> */}
            </div>

            <div className="rightSection">
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
                          style={{ color: "#de723c", fontSize: "20px" }}
                        />
                      }
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "20px" }}
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
                          style={{ color: "#de723c", fontSize: "20px" }}
                        />
                      }
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "20px" }}
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
                          style={{ color: "#de723c", fontSize: "20px" }}
                        />
                      }
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "20px" }}
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
                          style={{ color: "#de723c", fontSize: "20px" }}
                        />
                      }
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "20px" }}
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
                          style={{ color: "#de723c", fontSize: "20px" }}
                        />
                      }
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "20px" }}
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
                          style={{ color: "#de723c", fontSize: "20px" }}
                        />
                      }
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "20px" }}
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
                          style={{ color: "#de723c", fontSize: "20px" }}
                        />
                      }
                      emptyIcon={
                        <StarRoundedIcon
                          style={{ color: "#bab6b6", fontSize: "20px" }}
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

export default BooksPage;
