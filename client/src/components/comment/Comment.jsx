/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import "./comment.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { UserContext } from "../../context/UserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

function Comment() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const { user } = useContext(UserContext);
  const [reviewTrueAlertOpen, setReviewTrueAlertOpen] = useState(false);
  const [reviewFalseAlertOpen, setReviewFalseAlertOpen] = useState(false);

  const getBooksReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/review/${id}`
      );
      setReviews(response.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooksReviews();
  }, [id]);

  const handleSubmit = async () => {
    const userId = user._id;

    try {
      await axios.post(`http://localhost:8080/api/review/${id}`, {
        rating,
        reviewText,
        user: userId,
      });
      setReviewTrueAlertOpen(true);
      setRating(0);
      setReviewText("");
      getBooksReviews();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseTrueReviewAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setReviewTrueAlertOpen(false);
  };

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:8080/api/review/${reviewId}`);
      setReviewFalseAlertOpen(true);
      getBooksReviews();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseFalseReviewAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setReviewFalseAlertOpen(false);
  };

  return (
    <>
      <div className="commentSection">
        <h2>BOOK REVIEWS</h2>

        <div className="addComment">
          <div className="ratingDiv">
            <p>
              Your rating <span style={{ color: "#e40000" }}>*</span>
            </p>

            <Rating
              name="book-rating"
              precision={0.5}
              value={rating}
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
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>

          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Your review *"
            rows="8"
          />
          <div className="addButton">
            <button onClick={handleSubmit}>Add Comment</button>
          </div>
        </div>

        <Snackbar
          open={reviewTrueAlertOpen}
          autoHideDuration={3000}
          onClose={handleCloseTrueReviewAlert}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <MuiAlert
            onClose={handleCloseTrueReviewAlert}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your review has been successfully added!
          </MuiAlert>
        </Snackbar>

        <Snackbar
          open={reviewFalseAlertOpen}
          autoHideDuration={3000}
          onClose={handleCloseFalseReviewAlert}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <MuiAlert
            onClose={handleCloseFalseReviewAlert}
            severity="success"
            sx={{ width: "100%" }}
          >
            Review successfully deleted!
          </MuiAlert>
        </Snackbar>

        <div className="allComments">
          <h3>{reviews.length} REVIEWS</h3>
          <div className="reviews">
            {reviews.length == 0 ? (
              <h3 className="noReview">
                There are no reviews yet. Be the first to review
              </h3>
            ) : (
              reviews &&
              reviews.map((q, key) => (
                <div className="review" key={key}>
                  <div className="leftSide">
                    <i className="fa-solid fa-circle-user"></i>
                  </div>

                  <div className="rightSide">
                    <div className="nameAndTime">
                      <h4 className="name">{q.user.name}</h4>
                      <h5 className="time">
                        {moment(q.createdAt).format("MMMM D, YYYY")}
                      </h5>
                    </div>

                    <div className="ratingAndDeleteIcon">
                      <Rating
                        name="book-rating"
                        precision={0.5}
                        value={q.rating}
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
                        style={{ margin: "8px -2px" }}
                        readOnly
                      />

                      <div className="deleteIcon">
                        {user._id === q.user._id && (
                          <DeleteIcon
                            onClick={() => handleDelete(q._id)}
                            className="delete"
                          />
                        )}
                      </div>
                    </div>

                    <div className="text">
                      <p>{q.reviewText}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
