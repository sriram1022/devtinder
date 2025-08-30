const User = require("../models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(401).send("Access Denied");
  }
  try {
    const decryptedid = jwt.verify(token, "dev@tinder123");
    console.log(decryptedid);
    const { _id } = decryptedid;
    console.log(_id);
    const user = await User.findById(mongoose.Types.ObjectId(_id));
    if (!user) {
      return res.status(404).send("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
module.exports = userAuth;
