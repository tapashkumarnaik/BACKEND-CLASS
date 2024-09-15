// Task-1:
// Create a server that listens on port 4000 and responds with "Hello, World!" in home page
// and "This is about page" in about page. If any other page is requested, "page not found"
// switch statement


// Import modules:
const http = require("http");

// Create server

const server = http.createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello World`);
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>This is about page</h1>`);
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(`Page not found`);
        break;
    }
  });

// Run server
server.listen(4000, () => {
  console.log("Server is running on port 4000");
});