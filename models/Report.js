const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },

    reporter: {
      _id: { type: mongoose.Schema.ObjectId },
      username: { type: String },
      pictureProfile: { type: String },
    },

    reported: {
      type: mongoose.Schema.ObjectId,
    },

    // 0 = content report
    // 1 = comment report
    // 2 = product report
    typeReport: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", ReportSchema);
