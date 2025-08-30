const express = require("express");
const signinroute = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

signinroute.post("/usersignin", async (req, res) => {
  // creating new instance of the User model
  const { firstName, lastName, email, password, gender } = req.body;

  try {
    const protectedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: protectedPassword,
      gender,
    });
    console.log(user);
    await user.save();
    res.send("updated user");
  } catch (err) {
    res.status(400).send("Error updating user", err);
  }
});

module.exports = signinroute;
