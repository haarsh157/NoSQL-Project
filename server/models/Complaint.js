const mongoose = require("mongoose");
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
    unique: true,
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
});

const Complaint = mongoose.model("Complaint", ComplaintSchema); // Changed the model name to singular and capitalized
Complaint.createIndexes();
module.exports = Complaint;
