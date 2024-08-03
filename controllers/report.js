const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Report = require("../models/Report");
const addReport = require("../middleware/addReport");

exports.reporting = asyncHandler(async (req, res, next) => {
  const check = await Report.find({
    $and: [{ "reporter._id": req.user._id }, { reported: req.body.reported }],
  });

  if (check) {
    return next(new ErrorResponse(`You have already reported this`, 404));
  }

  const { text, reported, typeReport } = req.body;
  const reporter = {
    _id: req.user._id,
    username: req.user.username,
    pictureProfile: req.user.pictureProfile,
  };

  const createReport = await Report.create({
    text,
    reported,
    typeReport,
    reporter,
  });

  await addReport(typeReport, reported);

  return res.status(200).json({
    success: true,
    data: createReport,
  });
});

exports.allReports = asyncHandler(async (req, res, next) => {
  const all = await Report.find();

  return res.status(200).json({
    success: true,
    data: all,
  });
});
