const express = require("express");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
const app = express();
const port = 3000;

dotenv.config();

app.use(express.json());
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

// middleware
function middleware1(req, res, next) {
  console.log("this is middleware 1");
  next();
}

function middleware2(req, res, next) {
  console.log("this is middleware 2");
  next();
}

// global middleware
app.use((req, res, next) => {
  console.log(req.method, "-", req.url);
  next();
});

// middleware for a specific endpoint
app.use("/hello", (req, res, next) => {
  console.log("hello middleware");
  next();
});

app.get("/", [middleware1, middleware2], (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// jwt - json web token
// session id

// session id
// client -> server
// server will store user info on the server side
//         <- session id
// client -> server with session id
// server will verify user info using the session id, by doing a lookup on the database
//        <- reponse

// jwt
// client -> server
// server will create jwt for user, jwt will contain user info
//        <- jwt
// client -> server with jwt
// server will decrypt jwt to get user info, use the info to verify the user
//        <- response
