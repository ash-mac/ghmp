const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  Profile,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
// router.route("/").post(registerUser).get(protect, allUsers);

router.post("/login", authUser);
router.route("/profile").get(protect, Profile);

module.exports = router;
