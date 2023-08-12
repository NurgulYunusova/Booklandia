const cookieParser = require("cookie-parser");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const { db } = require("./config/db");

const app = express();

app.use(fileUpload());

app.use(express.static("authorImages"));
app.use("/bookImages", express.static("bookImages"));
app.use("/userProfileImages", express.static("userProfileImages"));

const { userRoutes } = require("./routes/userRoute");
const { bookRoutes } = require("./routes/bookRoute");
const { authorRoutes } = require("./routes/authorRoute");
const { categoryRoutes } = require("./routes/categoryRoute");
const { quizRoutes } = require("./routes/quizRoute");
const { questionRoutes } = require("./routes/questionRoute");
const { reviewRoutes } = require("./routes/reviewRoute");
const { wishlistRoutes } = require("./routes/wishlistRoute");

require("dotenv").config();

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/author", authorRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
