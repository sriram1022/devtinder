const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi from server");
});

app.get("/about", (req, res) => {
  res.send("hi from about");
});

app.listen(5500, () => {
  console.log("server created successfully");
});
