const express = require("express");
const mongoose = require("mongoose");
const connectdatabase = require("./config/database");
const app = express();
const User = require("./models/user");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userAuth = require("./middleware/auth");
app.use(express.json());
app.use(cookieParser());
const signinroute = require("./routes/signin");
const loginRouter = require("./routes/login");

app.use("/", signinroute);
app.use("/", loginRouter);

app.get("/userEmail", async (req, res) => {
  const Email = req.body.email;
  console.log(Email);
  try {
    const user = await User.find({ email: Email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (err) {
    res.status(500).send("Error retrieving user");
  }
});

app.delete("/deleteUser", async (req, res) => {
  il = req.body.email;
  try {
    const user = await User.findOneAndDelete({ email: Email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send("User deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting user");
  }
});

app.patch("/updateUser", async (req, res) => {
  const Email = req.body.email;
  const updatedData = req.body;
  try {
    const user = await User.findOneAndUpdate({ email: Email }, updatedData);
    res.send("User updated successfully");
  } catch (err) {
    res.status(500).send("Error updating user");
  }
});

connectdatabase()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(5500, () => {
      console.log("server created successfully");
    });
  })
  .catch((e) => {
    console.log("Database connection failed:", e);
  });
