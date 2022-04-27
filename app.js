const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const uberRouter = require("./routes/uber");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/uber", uberRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
