const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  guestName:{
      type:String,
      required:true
  },
  address:{
      type:String,
      required:true
  },
  numberOfGuests:{
      type:Number,
      required:true
  },
  roomsBooked:{
      type:Array,
      required:true,
      default:[]
  },
  arrivalTime:{
      type:Date,
      required:true
  },
  departureTime:{
      type:Date,
      required:true
  },
  purpose:{
      type:String,
  },
  category:{
      type:String,
      required:true
    },
    status: {
        type: String,
        required: true,
        default:"requested"
  },
  cancel:{
      type:Boolean,
      default:false
  }
});
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
