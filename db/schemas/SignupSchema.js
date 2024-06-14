const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  dob: Date,
  address: String,
});

module.exports = {
  SignupSchema,
};
