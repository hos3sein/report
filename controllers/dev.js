const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Report = require("../models/Report");

const fetch = require("node-fetch");

// create perm haye service report
exports.createPerm = asyncHandler(async (req, res, next) => {
  const { data } = req.body;
  try {
    const url = `http://localhost:6000/api/v1/setting/dev/createperm`;
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await rawResponse.json();

    if (response.success) {
      res.status(200).json({
        success: true,
        data: {},
      });
    }
  } catch (err) {
    console.log("err", err);
  }
});

// baraye pak kardan database content
exports.delAll = asyncHandler(async (req, res, next) => {
  await Report.remove();

  res.status(200).json({
    success: true,
    dta: {},
  });
});
