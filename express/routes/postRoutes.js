const router = require("express").Router();
const jwt = require("jsonwebtoken");

/**
 *
 * posts
 * GET, POST, DELETE
 */

const posts = [
  {
    id: 1,
    content: "fisrt post",
    userId: 1,
  },
];

router.get("/", (req, res) => {
  res.send(posts);
});

router.post("/", (req, res) => {
  const newPost = { ...req.body };
  posts.push(newPost);
  res.send(newPost);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const postId = parseInt(id);
  const index = posts.find((post) => {
    return post.id === postId;
  });
  if (!index) {
    res.status(400).send({ message: "Post does not exist" });
    return;
  }
  if (index) {
    posts.splice(index, 1);
    res.send({ message: "Success" });
  }
});

router.get("/user/:userId", authentication, (req, res) => {
  const { userId } = req.params;
  const user = req.user;
  if (parseInt(userId) !== parseInt(user.id)) {
    res.status(401).send("wrong user");
    return;
  }
  const userPosts = posts.filter((post) => {
    return parseInt(post.userId) === parseInt(user.id);
  });
  res.send(userPosts);
});

function authentication(req, res, next) {
  req.cookies;
  const authHeader = req.headers["authorization"];
  console.log(req.headers);
  const token = authHeader.split(" ")[1];

  if (token == null) {
    res.status(401).send("authentication error");
    return;
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.status(401).send("authentication error");
      return;
    }
    req.user = user;
    next();
  });
}

module.exports = router;
