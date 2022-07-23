const express = require("express");

const router = express.Router();

const indexController = require("../controllers/index.controller");

router
  .get("/", indexController.GET)
  .post("/", indexController.POST)
  .get("/app", indexController.APP);

module.exports = router;
