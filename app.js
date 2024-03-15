const express = require("express");
const app = express();
const port = 3000;

app.get("/api/home", (req, res) => {
  res.send("That is a Noode Server Response !");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
