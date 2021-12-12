const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load User model
const Post = require("../../models/Post");
const User = require("../../models/User");

router.post("/post", (req, res) => {
    Post.findOne({ email: req.body.email.toLowerCase(), title: req.body.title}).then(post => {
        if (post) {
            return res.status(400).json({ title: "Title already exists" });
        } else {
            newPost = new Post({
                email: req.body.email.toLowerCase(),
                title: req.body.title
            });
            newPost.save()
        }
    })
    .then( () => {
      return User.findOneAndUpdate({ email: req.body.email.toLowerCase() }, { $push: { discussHistory: "Post: " + req.body.title } })
    })
    .then(user => {
        if (!user) {
          return res.status(400).json({ email: "Email does not exist" });
        } else {
          return res.status(200).json({ Success: "Post created!" })
        }
    });
});

router.get("/posts", async (req, res) => {
    const posts = await Post.find({})
    return res.status(200).send( posts )
});


router.put("/comment", (req, res) => {
    Post.findOneAndUpdate({ 
            postEmail: req.body.email.toLowerCase(), 
            postTitle: req.body.title },
            { $push: { comments: req.body.comment } })
        .then(error => {
        if (error) {
            return res.status(200).json(error)
        } else {
            return res.status(200).json({ Success: "Comment Created" })
        }
      });
    });
 

 
  module.exports = router;