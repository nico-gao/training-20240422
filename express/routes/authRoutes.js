const router = require("express").Router();
const jwt = require("jsonwebtoken");

const users = [];
let id = 1;

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const newUser = {
    id,
    username,
    password,
  };
  id += 1;
  users.push(newUser);
  res.send("Register success");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => {
    return user.username === username;
  });
  if (!user) {
    res.status(401).send("Wrong username or password");
    return;
  }
  if (user.password !== password) {
    res.status(401).send("Wrong username or password");
    return;
  }

  const accessToken = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15s",
    }
  );

  res.send({ accessToken });
});

module.exports = router;
