const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

router.post("/checkoffcomplaint/:id", async (req, res) => {
  try {
    const checkoff = {};
    checkoff.statusStaff = "done";

    let complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).send("not found");
    }

    complaint = await Complaint.findByIdAndUpdate(req.params.id, {
      $set: checkoff,
    });
    res.json(complaint);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.get("/getcomplaints", async (req, res) => {
  try {
    const notes = await Complaint.find();

    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
