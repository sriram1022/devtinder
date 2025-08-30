const express = require("express");
const profileAuth = express.Router();

profileAuth.get("/profile", userAuth, async (req, res) => {
  res.send(req.user);
});

module.exports = profileAuth;
