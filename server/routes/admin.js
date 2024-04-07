const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");
const GuestRoom = require("../models/GuestRoomBook");
const User = require("../models/Users");

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
    const complaint = await Complaint.find();

    res.json(complaint);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

router.get("/getrooms", async (req, res) => {
  try {
    const rooms = await GuestRoom.find();

    res.json(rooms);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

router.get("/getstudents", async (req, res) => {
  try {
    const students = await User.find({ role: "student" });

    res.json(students);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
