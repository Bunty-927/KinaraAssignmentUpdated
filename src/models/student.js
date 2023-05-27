const mongoose = require("mongoose");

const studentDataSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    totalMarks: {
      type: Number,
      required: false,
    },
    mobile: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  {
    collection: "studentdata",
  }
);

const Student = mongoose.model("Student", studentDataSchema);

module.exports = {
  Student,
};
