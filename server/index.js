const express = require("express");
const { db } = require("./config/db");

const app = express();

const cors = require("cors");

// const { userRoutes } = require("./routes/userRoute");

require("dotenv").config();

db.connect();

app.use(express.json());
app.use(cors());

// app.use("/api/user", userRoutes);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
