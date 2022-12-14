
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  id: { type: string }
},
  {
    timestamps: true
  }

)

module.exports = mongoose.model('users', UserSchema);
