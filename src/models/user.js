const mongoose = require("mongoose");

const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    validate(value) {
      if (!["male", "female", "other"].includes(value)) {
        throw new Error("Gender is required");
      }
    },
  },
});
module.exports = mongoose.model("User", userSchema);
