const express = require("express");

const app = express();
const connectdatabase = require("./config/database");
const e = require("express");

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
