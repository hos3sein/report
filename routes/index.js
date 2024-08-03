const express = require("express");
const router = express.Router();

//prefix router User
const report = require("./report");
router.use("/", report);

//prefix router Dev
const dev = require("./dev");
router.use("/dev", dev);

module.exports = router;
