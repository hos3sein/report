const express = require("express");

const C = require("../controllers/dev");

const router = express.Router();

// POST
router.post("/createperm", C.createPerm);

router.get("/dellall", C.delAll);

module.exports = router;
