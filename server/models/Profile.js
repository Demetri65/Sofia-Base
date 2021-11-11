const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProfileSchema = new Schema({
  id: {
    type: String,
    required: true
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
    required: false
  },
});
module.exports = User = mongoose.model("users", ProfileSchema);