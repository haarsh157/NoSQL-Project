const express = require("express");
const GuestRoom = require("../models/GuestRoomBook");
const router = express.Router();

router.post(
  "/guestroombook",
  [
    //VALIDATIONS
    // body("name").isLength({ min: 3 }),
    // body("email", "Enter a valid email").isEmail(),
    // body("password", "Password must be 8 characters long").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const data = req.body;
      const newCheckIn = data.CheckIn;
      const newCheckOut = data.CheckOut;
      const check = await GuestRoom.find({
        $or: [
          {
            $and: [
              { g_from: { $gte: newCheckIn } },
              { g_from: { $lte: newCheckOut } },
            ],
          },
          {
            $and: [
              { g_upto: { $gte: newCheckIn } },
              { g_upto: { $lte: newCheckOut } },
            ],
          },
          {
            $and: [
              { g_from: { $lte: newCheckIn } },
              { g_upto: { $gte: newCheckOut } },
            ],
          },
        ],
      });
      if (check.length === 0) {
        await GuestRoom.create({
          room_no: data.RoomNo,
          name: data.Name,
          gender: data.Gender,
          relationship: data.Relationship,
          persons: data.NumberOfPersons,
          permanentadd: data.PermanentAddress,
          contactadd: data.ContactAddress,
          phone: data.PhoneNo,
          email: data.EmailId,
          g_from: data.CheckIn,
          g_upto: data.CheckOut,
        });
        res.send("Guest room booked!");
      } else {
        res.send(
          "Room is already booked for that duration, pls choose some other duration."
        );
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
