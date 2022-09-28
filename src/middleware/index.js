const cors = require("cors");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const parser = require("body-parser");
module.exports = (app) => {
  app.use(express.static(path.join(__dirname, "/")));
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(
    parser({
      extended: true,
    })
  );
  dotenv.config();
  return app;
};
