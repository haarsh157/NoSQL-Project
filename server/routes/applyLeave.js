const express = require("express");
const Leave = require("../models/Leaves");
const router = express.Router();

let leaveCounter = 0;

router.post("/applyLeave", async (req, res) => {
  try {
    // Increment leaveCounter for leave_id (if needed)
    leaveCounter++;

    // Create a new Leave document based on request body
    const newLeave = new Leave({
      leave_id: leaveCounter,
      name: req.body.name,
      roll_no: req.body.roll_no,
      room_no: req.body.room_no,
      gender: req.body.gender,
      program: req.body.program,
      branch: req.body.branch,
      reason: req.body.reason,
      l_from: req.body.l_from,
      l_upto: req.body.l_upto,
      address: req.body.address,
      contact_no: req.body.contact_no,
      contact_no_of_parents: req.body.contact_no_of_parents,
      permission: req.body.permission,
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
