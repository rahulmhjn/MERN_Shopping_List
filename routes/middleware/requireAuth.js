const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../models/User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === "Bearer askndakfnsjdbgsfg"

  // Check for token
  if (!authorization) {
    return res.status(401).json({ msg: "You must be logged in." });
  }

  //Verify token
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.jwtSecret, async (err, payload) => {
    if (err) {
      return res.status(401).json({ msg: "You must be logged in." });
    }

    const { id } = payload;

    const user = await User.findById(id);
    req.user = user;
    next();
  });
};
