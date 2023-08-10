const cookieParser = require("cookie-parser");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const { db } = require("./config/db");

const app = express();

app.use(fileUpload());

app.use(express.static("authorImages"));
app.use("/bookImages", express.static("bookImages"));

const { userRoutes } = require("./routes/userRoute");
const { bookRoutes } = require("./routes/bookRoute");
const { authorRoutes } = require("./routes/authorRoute");
const { categoryRoutes } = require("./routes/categoryRoute");
const { quizRoutes } = require("./routes/quizRoute");
const { questionRoutes } = require("./routes/questionRoute");

require("dotenv").config();

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/author", authorRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/quiz", quizRoutes);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
