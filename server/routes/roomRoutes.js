const express = require("express");
const {
  bookRoom,
  checkAvailability,
  createRoom,
  cancelBooking,
  acceptRequest,
  availableRequest,
} = require("../controllers/roomControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/bookRoom").post(protect, bookRoom);
router.route("/checkRoom").get( checkAvailability);
router.route("/checkRoom").get(protect, checkAvailability);
router.route("/createRoom").post(protect, createRoom);
router.route("/cancelBooking").post(protect, cancelBooking);
router.route("/acceptRequest").post(protect, acceptRequest);
router.route("/availableRequest").get(availableRequest);

//Create diffrent protection for admin
// router.route("/createRoom").post(protect, createRoom);

module.exports = router;
