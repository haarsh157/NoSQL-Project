// In models/Complaint.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
  complaint_id: {
    type: Number,
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
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Resolved", "Rejected"]
  }
});

const Complaint = mongoose.model("Complaint", ComplaintSchema);
module.exports = Complaint;
