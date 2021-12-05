const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = mongoose.Schema({
    name: String,
    email: String,
    text: String,
});

const PostSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  public: {
    type: Boolean,
    default: true
  },
  comments: {
    type: [CommentSchema],
    required: false
  },
  
});
module.exports = User = mongoose.model("posts", PostSchema);