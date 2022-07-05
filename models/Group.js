const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const groupSchema = new Schema({
  name: String,
  phase: { type: Number, default: 1 },
  online: { type: Boolean, default: false },
  students: { type: [String], default: [] },
  shedule: Object,
  crshedule: {
    type: Object,
    isChecked: Boolean,
    days: {
      type: Object,
      mon: Boolean,
      tue: Boolean,
      wed: Boolean,
      thu: Boolean,
      fri: Boolean,
    },
  },
});

module.exports = model("Group", groupSchema);
