const express = require("express");
const { bookRoom } = require("../controllers/roomControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.route("/bookRoom").post(protect,bookRoom);
router.route("/bookRoom").post(bookRoom);

// router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchRooms);
// router.route("/group").post(protect, bookRoom);
// router.route("/rename").put(protect, cancelRoomBooking);
// router.route("/").put(protect, removeFromGroup);
// router.route("/").put(protect, addToGroup);
module.exports = router;
