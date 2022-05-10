const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  bookedSlots:{
    type:Array,
  },
  picture: {
    type: String,

    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;

