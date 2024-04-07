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

module.exports = router;