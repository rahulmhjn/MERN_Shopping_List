const express = require("express");
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/requireAuth");
// User Model
const User = require("../../models/User");

const router = express.Router();

// @route   POST api/auth
// @desc    Authentic the User
// @access  Public
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  //Simple Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //check for existing user
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(400).json({ msg: "User does not exists" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ id: user._id }, process.env.jwtSecret, {
      expiresIn: 3600,
    });
    res.json({
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    return res.status(401).send({ error: "Invalid password or email" });
  }
});

router.get("/user", requireAuth, (req, res) => {
  User.findById(req.user._id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
