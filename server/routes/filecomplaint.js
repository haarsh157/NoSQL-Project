const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

let complaintCounter = 0;

router.post("/newcomplaint", async (req, res) => {
  try {
    complaintCounter++;

    const { type, rollno, description, image } = req.body;
    const complaint = new Complaint({
      complaint_id: complaintCounter,
      type,
      rollno,
      description,
      image,
    });
    await complaint.save();
    res.status(201).json(complaint);
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

router.post("/checkoffcomplaint/:id", async (req, res) => {
  try {
    const checkoff = {};
    checkoff.statusStudent = "done";

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

router.delete("/deletecomplaint/:id", async (req, res) => {
  try {
    let complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).send("not found");
    }

    complaint = await Complaint.findByIdAndDelete(req.params.id);
    res.json({ Success: "The Complaint has been deleted", complaint });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
