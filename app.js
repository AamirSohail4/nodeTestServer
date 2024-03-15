const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/api/home", (req, res) => {
  res.send("That is a Noode Server Response !");
});
app.get("/api/getRespons", (req, res) => {
  res.send("Server Response Hello ");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
