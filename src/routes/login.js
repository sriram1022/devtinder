const express = require("express");
const loginRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

loginRouter.post("/userlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw new Error("Invalid password");
    }
    if (validatePassword) {
      const token = jwt.sign({ id: user._id }, "dev@tinder123");
      res.cookie("token", token);
      res.send("User logged in successfully");
    }
  } catch (err) {
    res.status(400).send("Error logging in user", err);
  }
});

module.exports = loginRouter;
