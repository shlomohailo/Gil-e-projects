const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordValidation: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
  },
  { timeseries: true }
);


module.exports = mongoose.model("Users", UsersSchema);