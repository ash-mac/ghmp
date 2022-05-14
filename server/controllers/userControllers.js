const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const res = require("express/lib/response");
const generateToken = require("../config/generateToken");
const Booking = require("../models/bookingModel");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  //iitrpr.ac.in
  const domain = email.substring(email.length - 12);
  if (domain !== "iitrpr.ac.in") {
    res.status(400);
    throw new Error("Only people belonging to IIT Ropar can register");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User alredy Exist");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  //console.log(user);
  //console.log(user.matchPassword(password));
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});
// /api/user?search=apple
const allUsers = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});
const Profile = expressAsyncHandler(async (req, res) => {
  const user = req.user;
  const { history } = user;
  let bookings = [];
  //guestName roomsBooked arrivalTime departureTime cancel
  for (let bookingId of history) {
    let booking = await Booking.findById(bookingId, {
      guestName: 1,
      roomsBooked: 1,
      arrivalTime: 1,
      departureTime: 1,
      cancel: 1,
      _id: 0,
    });
    bookings.push(booking);
  }
  res.status(201).json(bookings);
});
module.exports = { registerUser, authUser, allUsers, Profile };
