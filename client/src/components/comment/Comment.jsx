/* eslint-disable react/no-unescaped-entities */
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import "./comment.scss";

function Comment() {
  // const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState("");

  // useEffect(() => {
  //   // Fetch comments for the specific book from the backend API
  //   axios
  //     .get(`/api/comments/${bookId}`)
  //     .then((response) => {
  //       setComments(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching comments:", error);
  //     });
  // }, [bookId]);

  // const handleCommentChange = (event) => {
  //   setNewComment(event.target.value);
  // };

  // const handleAddComment = () => {
  //   // Send the new comment to the backend API
  //   axios
  //     .post("/api/comments", { bookId, text: newComment })
  //     .then((response) => {
  //       // Update the comments state with the new comment
  //       setComments([...comments, response.data]);
  //       setNewComment("");
  //     })
  //     .catch((error) => {
  //       console.error("Error adding comment:", error);
  //     });
  // };

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
              value={0}
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
              // onChange={handleBookRatingChange}
            />
          </div>

          <textarea
            // value={newComment}
            // onChange={handleCommentChange}
            placeholder="Your review *"
            rows="8"
          />
          {/* <button onClick={handleAddComment}>Add Comment</button> */}
          <div className="addButton">
            <button>Add Comment</button>
          </div>
        </div>

        <div className="allComments">
          <h3>5 REVIEWS</h3>
          <div className="reviews">
            <div className="review">
              <div className="leftSide">
                <i
                  className="fa-solid fa-circle-user"
                  style={{ fontSize: "40px" }}
                ></i>
              </div>

              <div className="rightSide">
                <div className="nameAndTime">
                  <h4 className="name">Laura Climanton</h4>
                  <h5 className="time">February 15, 2022</h5>
                </div>
                <Rating
                  name="book-rating"
                  precision={0.5}
                  value={3.5}
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
                  style={{ margin: "8px 0" }}
                  readOnly
                  // onChange={handleBookRatingChange}
                />
                <div className="text">
                  <p>
                    "Anna Karenina" is an enthralling masterpiece by Leo Tolstoy
                    that captures the complexity of human emotions and societal
                    norms in 19th-century Russia. The story revolves around the
                    passionate love affair between Anna Karenina and Count
                    Vronsky, defying the conventions of their time. As the
                    affair unfolds, Tolstoy skillfully delves into the lives of
                    various characters, depicting their joys, sorrows, and inner
                    struggles. The novel is a timeless exploration of love,
                    desire, jealousy, and morality, exploring the consequences
                    of choices made in the pursuit of happiness. Tolstoy's
                    evocative prose and profound insights into human nature make
                    "Anna Karenina" a compelling and thought-provoking read. It
                    remains an enduring classic that continues to resonate with
                    readers across generations, offering valuable lessons on the
                    complexities of life and relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="review">
              <div className="leftSide">
                <i
                  className="fa-solid fa-circle-user"
                  style={{ fontSize: "40px" }}
                ></i>
              </div>

              <div className="rightSide">
                <div className="nameAndTime">
                  <h4 className="name">Laura Climanton</h4>
                  <h5 className="time">February 15, 2022</h5>
                </div>
                <Rating
                  name="book-rating"
                  precision={0.5}
                  value={3.5}
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
                  style={{ margin: "8px 0" }}
                  readOnly
                  // onChange={handleBookRatingChange}
                />
                <div className="text">
                  <p>
                    "Anna Karenina" is an enthralling masterpiece by Leo Tolstoy
                    that captures the complexity of human emotions and societal
                    norms in 19th-century Russia. The story revolves around the
                    passionate love affair between Anna Karenina and Count
                    Vronsky, defying the conventions of their time. As the
                    affair unfolds, Tolstoy skillfully delves into the lives of
                    various characters, depicting their joys, sorrows, and inner
                    struggles. The novel is a timeless exploration of love,
                    desire, jealousy, and morality, exploring the consequences
                    of choices made in the pursuit of happiness. Tolstoy's
                    evocative prose and profound insights into human nature make
                    "Anna Karenina" a compelling and thought-provoking read. It
                    remains an enduring classic that continues to resonate with
                    readers across generations, offering valuable lessons on the
                    complexities of life and relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="review">
              <div className="leftSide">
                <i
                  className="fa-solid fa-circle-user"
                  style={{ fontSize: "40px" }}
                ></i>
              </div>

              <div className="rightSide">
                <div className="nameAndTime">
                  <h4 className="name">Laura Climanton</h4>
                  <h5 className="time">February 15, 2022</h5>
                </div>
                <Rating
                  name="book-rating"
                  precision={0.5}
                  value={3.5}
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
                  style={{ margin: "8px 0" }}
                  readOnly
                  // onChange={handleBookRatingChange}
                />
                <div className="text">
                  <p>
                    This classic American novel tells the gripping story of
                    young Scout Finch and her brother Jem as they grow up in the
                    racially divided town of Maycomb, Alabama during the 1930s.
                    Their father, Atticus Finch, a principled lawyer, defends a
                    black man accused of raping a white woman, causing tensions
                    to escalate in the deeply prejudiced community. Through
                    Scout's innocent eyes, we witness the injustices and moral
                    struggles that mark a defining moment in their lives. "To
                    Kill a Mockingbird" beautifully explores themes of racial
                    inequality, empathy, and the importance of standing up for
                    what's right. Harper Lee's powerful narrative leaves a
                    lasting impact on readers, making it a timeless masterpiece
                    of American literature.
                  </p>
                </div>
              </div>
            </div>

            <div className="review">
              <div className="leftSide">
                <i
                  className="fa-solid fa-circle-user"
                  style={{ fontSize: "40px" }}
                ></i>
              </div>

              <div className="rightSide">
                <div className="nameAndTime">
                  <h4 className="name">Laura Climanton</h4>
                  <h5 className="time">February 15, 2022</h5>
                </div>
                <Rating
                  name="book-rating"
                  precision={0.5}
                  value={3.5}
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
                  style={{ margin: "8px 0" }}
                  readOnly
                  // onChange={handleBookRatingChange}
                />
                <div className="text">
                  <p>
                    The novel is a timeless exploration of love, desire,
                    jealousy, and morality, exploring the consequences of
                    choices made in the pursuit of happiness. Tolstoy's
                    evocative prose and profound insights into human nature make
                    "Anna Karenina" a compelling and thought-provoking read. It
                    remains an enduring classic that continues to resonate with
                    readers across generations, offering valuable lessons on the
                    complexities of life and relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="review">
              <div className="leftSide">
                <i
                  className="fa-solid fa-circle-user"
                  style={{ fontSize: "40px" }}
                ></i>
              </div>

              <div className="rightSide">
                <div className="nameAndTime">
                  <h4 className="name">Laura Climanton</h4>
                  <h5 className="time">February 15, 2022</h5>
                </div>
                <Rating
                  name="book-rating"
                  precision={0.5}
                  value={3.5}
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
                  style={{ margin: "8px 0" }}
                  readOnly
                  // onChange={handleBookRatingChange}
                />
                <div className="text">
                  <p>
                    "Anna Karenina" is an enthralling masterpiece by Leo Tolstoy
                    that captures the complexity of human emotions and societal
                    norms in 19th-century Russia. The story revolves around the
                    passionate love affair between Anna Karenina and Count
                    Vronsky, defying the conventions of their time. As the
                    affair unfolds, Tolstoy skillfully delves into the lives of
                    various characters, depicting their joys, sorrows, and inner
                    struggles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
