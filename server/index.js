const express = require("express");
const { db } = require("./config/db");

const app = express();

const cors = require("cors");

// const { userRoutes } = require("./routes/userRoute");
const { bookRoutes } = require("./routes/bookRoute");
const { authorRoutes } = require("./routes/authorRoute");
const { categoryRoutes } = require("./routes/categoryRoute");

require("dotenv").config();

db.connect();

app.use(express.json());
app.use(cors());

// app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/author", authorRoutes);
app.use("/api/category", categoryRoutes);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
