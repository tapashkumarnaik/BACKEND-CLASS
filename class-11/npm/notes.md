# Middlewares :

- Middlewares are functions that have access to the `request(req)` and `response(res)` and the `next` function in express.js.

- Execute any code
- Modify the `req` and `res` objects.
- Call `next()` to pass control to the next middleware function in the stack.
- End the req-res cycle.

# Types :
## Application-level middleware (app.use())
 
  ```
  app.use((req, res, next) => {
  console.log("Hello from application-level middleware");
  next();
  }); 
  ```
## Route-level middleware
  ```
  router.use((req, res, next) => {
  console.log("Hello from route-level middleware");
  });
  ```
## Error-handling middlewares
  ```
  app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Error happens");
  });
  ```
## Built-In middlewares
   - express.json() : parses the request body as JSON
   - express.urlencoded() : parses the request body as URL encoded data
   - express.static() : serves static files from the root of the application

## Third-party middlewares
- Morgan
- CORS  

## Custom Middlewares
- IN SERVER.JS 😂