require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({msg: "initial server setup"});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
