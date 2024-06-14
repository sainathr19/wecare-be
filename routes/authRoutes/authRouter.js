const authRouter = require("express").Router();
const bcrypt = require("bcrypt");
const creds = require("../../db/db");
authRouter.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const result = await creds.findOne({ username: username });
  if (!result) {
    return res.json({ msg: "User not Found", status: "unf" });
  } else {
    bcrypt.compare(password, result.password, (err, correct) => {
      if (correct) {
        const token = jwt.sign({ username: "sainath" }, "sainathsecret");
        return res.json({ msg: "Logged in", token: token, status: "success" });
      } else {
        return res.json({ msg: "Wrong Password", status: "wp" });
      }
    });
  }
});

authRouter.post("/signp", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = new creds({
    username: username,
    password: await bcrypt.hash(password, 10),
  });
  user.save();
  return res.json({ msg: "Success", status: "success" });
});

module.exports = authRouter;
