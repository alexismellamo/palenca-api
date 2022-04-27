const express = require("express");
const router = express.Router();

function index(req, res, next) {
  res.send("Hello Palenca");
}

router.get("/", index);

const indexModule = (module.exports = router);
indexModule.index = index;
