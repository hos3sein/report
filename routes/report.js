const express = require("express");

const C = require("../controllers/report");

const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

// POST
router.post("/reporting", protect, C.reporting);

router.get("/all", protect, C.allReports);

module.exports = router;
