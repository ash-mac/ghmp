const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const Room = require("../models/roomModels");
const Booking = require("../models/bookingModel");

const compareDates = (date1, date2) => {
  date1 = new Date(date1);
  date2 = new Date(date2);
  // console.log(date1.getTime());
  // console.log(date2.getTime());
  if (date1.getTime() <= date2.getTime()) return true;
  return false;
};

const checkRoom = (room, arrivalTime, departureTime) => {
  let flag = true;
  room.bookedSlots.forEach((slot) => {
    if (
      compareDates(departureTime, slot.arrivalTime) == false &&
      compareDates(slot.departureTime, arrivalTime) == false
    ) {
      flag = false;
    }
  });
  return flag;
};

const addSlotsInRoom = async (roomId, arrivalTime, departureTime) => {
  const room = await Room.findOne({ roomId });
  room.bookedSlots.push({ arrivalTime, departureTime });
  await room.save();
};
const checkAvailability = expressAsyncHandler(async (req, res) => {
  let { arrivalTime, departureTime } = req.body;
  const rooms = await Room.find({});
  availableSingleRoom = 0;
  availableDoubleRoom = 0;
  for (let i = 0; i < rooms.length; i++) {
    const room = rooms[i];
    if (room.type == "single") {
      if (checkRoom(room, arrivalTime, departureTime)) {
        ++availableSingleRoom;
      }
    } else {
      if (checkRoom(room, arrivalTime, departureTime)) {
        ++availableDoubleRoom;
      }
    }
  }
  const data = {};
  data.singleRoom = availableSingleRoom;
  data.doubleRoom = availableDoubleRoom;
  res.status(201).json(data);
});
const bookRoom = expressAsyncHandler(async (req, res) => {
  let user = req.user;
  const userId = user._id;
  let {
    guestName,
    address,
    numberOfGuests,
    arrivalTime,
    departureTime,
    singleRoom,
    doubleRoom,
    purpose,
    category,
  } = req.body;

  const rooms = await Room.find({});
  const singleRooms = [];
  const doubleRooms = [];
  for (let i = 0; i < rooms.length; i++) {
    const room = rooms[i];
    if (room.type === "single") {
      if (singleRoom > 0 && checkRoom(room, arrivalTime, departureTime)) {
        singleRooms.push(room.roomId);
        singleRoom--;
      }
    } else {
      if (doubleRoom > 0 && checkRoom(room, arrivalTime, departureTime)) {
        doubleRooms.push(room.roomId);
        doubleRoom--;
      }
    }
  }
  if (singleRoom > 0 || doubleRoom > 0) {
    throw new Error(
      `We have ${singleRoom} lesser single rooms and ${doubleRoom} lesser double rooms`,
    );
  }

  const booking = await Booking.create({
    guestName,
    address,
    numberOfGuests,
    arrivalTime,
    departureTime,
    purpose,
    category,
  });

  singleRooms.forEach((roomId) => {
    booking.roomsBooked.push(roomId);
  });

  doubleRooms.forEach((roomId) => {
    booking.roomsBooked.push(roomId);
  });

  await booking.save();
  user = await User.findById(userId);
  user.history.push(booking._id);
  await user.save();

  for (const roomId of singleRooms) {
    await addSlotsInRoom(roomId, arrivalTime, departureTime);
  }
  // singleRooms.forEach((roomId)=>{
  //   await addSlotsInRoom(roomId,arrivalTime,departureTime);
  // })

  for (const roomId of doubleRooms) {
    await addSlotsInRoom(roomId, arrivalTime, departureTime);
  }
  // doubleRooms.forEach((roomId)=>{
  //   await addSlotsInRoom(roomId,arrivalTime,departureTime);
  // })

  const data = {};

  data.bookingId = booking._id;
  data.singleRooms = singleRooms;
  data.doubleRooms = doubleRooms;

  res.status(201).json(data);
});

const removeSlotsFromRoom = async (roomId, arrivalTime, departureTime) => {
  const room = await Room.findOne({ roomId });
  // console.log(room);
  // console.log("Hii");
  for (let i = 0; i < room.bookedSlots.length; i++) {
    const slot = room.bookedSlots[i];

    if (
      Date(slot.arrivalTime) === Date(arrivalTime) &&
      Date(slot.departureTime) === Date(departureTime)
    ) {
      console.log(slot);

      room.bookedSlots.slice(i, 1);
    }
  }
  await room.save();
};
const availableRequest = expressAsyncHandler(async (req, res) => {
  const bookings = await Booking.find({});
  const request = [];
  for (let i = 0; i < bookings.length; i++) {
    const booking = bookings[i];

    if (booking.status === "requested") {
      request.push(booking);
    }
  }
  res.status(201).json(request);
});

const acceptRequest = expressAsyncHandler(async (req, res) => {
  const { _id } = req.body;
  const booking = await Booking.findOne({ _id });
  if (!booking) {
    throw new Error("No such booking found");
  }
  booking.status = "accepted";
  // add logic for booking the room
  await booking.save();
  res.status(200).json({ message: "Successfully booked" });
});
const cancelBooking = expressAsyncHandler(async (req, res) => {
  const { _id } = req.body;
  // console.log(_id);
  const booking = await Booking.findOne({ _id });
  // console.log(booking);
  if (booking.status === "cancelled") {
    throw new Error("Booking is alredy cancelled");
  }
  if (!booking) {
    throw new Error("No such booking found");
  }
  booking.status = "cancelled";
  booking.cancel = true;

  booking.cancelled = true;
  await booking.save();

  booking.roomsBooked.forEach(async (roomId) => {
    await removeSlotsFromRoom(
      roomId,
      booking.arrivalTime,
      booking.departureTime,
    );
  });
  res.status(200).json({ message: "Successfully cancelled" });
});

const createRoom = expressAsyncHandler(async (req, res) => {
  let { roomId, type } = req.body;
  type = type.toLowerCase();

  if (!roomId || !type) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  let flag = type == "single" || type == "double";
  if (flag == 0) {
    res.status(400);
    throw new Error("Please only select double or single");
  }
  const room = await Room.create({ roomId, type });
  await room.save();
  // const roomExist=await Room.find
  res.status(201).json({ message: "sucess" });
});
module.exports = {
  bookRoom,
  checkAvailability,
  createRoom,
  cancelBooking,
  acceptRequest,
  availableRequest,
};
