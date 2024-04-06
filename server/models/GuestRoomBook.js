const mongoose = require("mongoose");
const { Schema } = mongoose;

const GuestRoomSchema = new Schema({
  room_no: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  relationship: {
    type: String,
    require: true,
  },
  persons: {
    type: Number,
    require: true,
  },
  permanentadd: {
    type: String,
    require: true,
  },
  contactadd: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  g_from: {
    type: Date,
    require: true,
  },
  g_upto: {
    type: Date,
    require: true,
  }
});

const GuestRoom = mongoose.model("guest_room", GuestRoomSchema);
GuestRoom.createIndexes();
module.exports = GuestRoom;

