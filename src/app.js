const express = require("express");
const mongoose = require("mongoose");
const connectdatabase = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/userlogin", async (req, res) => {
  // creating new instance of the User model
  const user = new User(req.body);
  try {
    await user.save();

    res.send("updated user");
  } catch (err) {
    res.status(400).send("Error updating user");
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
