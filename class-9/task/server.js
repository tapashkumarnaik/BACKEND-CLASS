// Import express
const express = require("express");
require("dotenv").config();
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Welcome to home page.");
});

app.get("/product", (req, res) => {
  res.send("This is product page.");
});

app.get("/about", (req, res) => {
  res.send("This is about page.");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page.");
});

// Run the express server

const port = process.env.PORT;
const PORT = port || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
