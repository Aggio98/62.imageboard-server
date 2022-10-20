const express = require("express");
const Router = express();
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  const user = await User.findAll();
  res.json(user);
});

module.exports = router;
