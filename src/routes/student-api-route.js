const express = require("express");
const { StudentService } = require("../services/student-service");
const { handleRequest } = require("../utils/express-utils");

const getRouter = () => {
  const service = new StudentService();

  let router = express.Router();
  router
    .route("/")
    .get(handleRequest(service.getAllStudent));

  return router;
};

module.exports = getRouter;