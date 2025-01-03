const mongoose = require("mongoose");
require("dotenv").config();

// const URL = process.env.URL;
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected");
});

db.on("error", (err) => {
  console.error("Database connection error:", err);
});

module.exports = db;
