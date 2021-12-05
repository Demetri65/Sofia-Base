const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schemaz
const UserSchema = new Schema({
  name: {
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
  profession: {
    type: String,
    required: false
  },
  interests: {
    type: [String],
    required: true
  },
  bookHistory: {
    type: [String],
    required: false
  },
  discussHistory: {
    type: [String],
    default: ["Discussion History"]
  },
});
module.exports = User = mongoose.model("users", UserSchema);