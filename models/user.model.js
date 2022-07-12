const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: {
    type: String,
    unique: true
  },
  reality: {
    type: {}
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema)

module.exports = User;