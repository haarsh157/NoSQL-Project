// In models/Complaint.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
  complaint_id: {
    type: Number,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: false, // Mark rollno as not required
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  statusStaff: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Resolved", "Rejected"],
  },
  statusStudent: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Resolved"],
  }
});

const Complaint = mongoose.model("Complaint", ComplaintSchema);
module.exports = Complaint;
