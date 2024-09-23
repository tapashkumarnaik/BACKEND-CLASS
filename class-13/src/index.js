// Import modules
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

// Relative path and Absolute path
// "../"             // (__dirname)

const staticPath = path.join(__dirname, "../public");

// View engine set
app.set('view engine', 'hbs');
app.engine('hbs', require('hbs').__express);

// Middlewares
app.use(express.static(staticPath));

// Routes
app.get("/", (req, res) => {
  //   res.send("Routes working...");
  res.render("index", {
    name: "Hey it's me Tapash",
  });
});

app.get("/check", (req, res) => {
  res.send("Express routes working perfectly");
});

const PORT = 8000;

// Run the server
app.listen(PORT,
  () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });