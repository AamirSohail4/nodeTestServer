const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Define API routes
app.get("/api/home", (req, res) => {
  res.send("This is a Node Server Response!");
});

app.get("/api/getResponse", (req, res) => {
  res.send("Server Response Hello");
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running and listening on port ${port}`);
});
