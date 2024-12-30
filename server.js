const express = require("express");
const db = require("./db");
const app = express();
require("dotenv").config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Backend API");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/queries", require("./routes/query"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listining on port ${PORT}`);
});
