const express = require("express");
const {
  bookRoom,
  checkAvailability,createRoom,
} = require("../controllers/roomControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/bookRoom").post(protect, bookRoom);
router.route("/checkRoom").get(protect, checkAvailability);
//Create diffrent protection for admin
// router.route("/createRoom").post(protect, createRoom);


module.exports = router;
