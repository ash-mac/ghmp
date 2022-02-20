const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  roomType: { type: String, required: true },
  isBooked: { type: Boolean, required: true },
  picture: {
    type: String,

    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});
const User = mongoose.model("User", userSchema);
