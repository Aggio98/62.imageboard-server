const express = require("express");
const Router = express;
const Image = require("../models").image;

const router = new Router();

router.get("/", async (req, res, next) => {
  const img = await Image.findAll();
  res.json(img);
});

module.exports = router;
