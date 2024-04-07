const mongoose = require("mongoose");

const LeavesSchema = new mongoose.Schema({
  leave_id: {
    type: Number,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  roll_no: {
    type: String,
    require: true,
  },
  room_no: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  program: {
    type: String,
    require: true,
  },
  branch: {
    type: String,
    require: true,
  },
  reason: {
    type: String,
    require: true,
  },
  l_from: {
    type: Date,
    require: true,
  },
  l_upto: {
    type: Date,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  contact_no: {
    type: String,
    require: true,
  },
  contact_no_of_parents: {
    type: String,
    require: true,
  },
  permission: {
    type: String,
    require: true,
  },
});

const Leave = mongoose.model("leaves", LeavesSchema);
// Leave.createIndexes();
module.exports = Leave;
