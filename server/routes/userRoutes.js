const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);

module.exports = router;
