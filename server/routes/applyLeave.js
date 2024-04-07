const express = require("express");
const Leave = require("../models/Leaves");
const router = express.Router();

let leaveCounter = 0;

router.post("/applyLeave", async (req, res) => {
  try {
    // Increment leaveCounter for leave_id (if needed)
    leaveCounter++;

    // Destructure data from req.body
    const {
      name,
      roll_no,
      room_no,
      gender,
      program,
      branch,
      reason,
      l_from,
      l_upto,
      address,
      contact_no,
      contact_no_of_parents,
      permission,
    } = req.body;

    console.log(name);

    // Create a new Leave document based on destructured data
    const newLeave = new Leave({
      leave_id: leaveCounter,
      name,
      roll_no,
      room_no,
      gender,
      program,
      branch,
      reason,
      l_from,
      l_upto,
      address,
      contact_no,
      contact_no_of_parents,
      permission,
    });

    // Save the new Leave document to the database
    await newLeave.save();

    console.log("Leave applied:", newLeave);
    // Send a success response
    res.status(200).send("Applied for leave successfully!");
  } catch (error) {
    // Log and handle any errors that occur
    console.error("Error applying for leave:", error.message);
    res.status(500).send("Failed to apply for leave. Please try again.");
  }
});

module.exports = router;
