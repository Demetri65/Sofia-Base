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
    let post = Post.findById(req.body.id);
    if (!post) res.status(400).send("Post Not Found");
    let comment = {
      text: req.body.comment,
      email: req.body.email,
    };
    Post.findOneAndUpdate({_id: req.body.id}, { $push: { comments: comment}})
      .then(() => res.status(200).send("Success!"))
      .catch(error => console.log(error));
    });
 

 
  module.exports = router;