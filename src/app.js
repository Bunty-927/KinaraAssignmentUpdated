const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const getStudentRouter = require("./routes/student-api-route");
const cors = require("cors");

function configureExpress(basePath) {
  const app = express();
  app.use(bodyParser.json());
  app.use(express.static(path.join(basePath, "public")));
  app.use(cors());

  app.use("/api/student", getStudentRouter());

  return app;
}

module.exports = {
  configureExpress,
};
