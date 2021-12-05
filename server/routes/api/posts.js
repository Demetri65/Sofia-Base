const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load User model
const Post = require("../../models/Post");
const User = require("../../models/User");

router.post("/post", (req, res) => {
    User.findOne({ email: req.body.email.toLowerCase()}).then(user => {
        if (!user) {
          return res.status(400).json({ email: "Email does not exist" });
        } else {
        }
    });
    Post.findOne({ email: req.body.email.toLowerCase(), title: req.body.title.toLowerCase()}).then(post => {
        if (post) {
            return res.status(400).json({ title: "Title already exists" });
        } else {
            newPost = new Post({
                name: req.body.name,
                email: req.body.email.toLowerCase(),
                title: req.body.title
            });
            newPost.save()
            // return res.status(200).json({ Success: "Post Created!" });
        }
    });
    if (discussHistory) {
        User.findOneAndUpdate({ email: req.body.email.toLowerCase() }, { $push: { discussHistory: req.body.title } }).then(user => {
            if (!user) {
              return res.status(400).json({ email: "Email does not exist" });
            } else {
              return res.status(200).json({ Success: "Post created!" })
            }
        })
    }
});

router.patch("/comment", (req, res) => {
    let comment = req.body.comments
    User.findOne({ email: req.body.email.toLowerCase()}, {}).then(user => {
        if (user) {
            res.status(200).json(user)
        //   return res.status(400).json({ email: "Email already exists" });
        } else {
        
    //       const updateUser = new User({
    //         password: req.body.password
    //       });
    // // Hash password before saving in database
    //       bcrypt.genSalt(10, (err, salt) => {
    //         bcrypt.hash(newUser.password, salt, (err, hash) => {
    //           if (err) throw err;
    //           newUser.password = hash;
    //           newUser
    //             .save()
    //             .then(user => res.json(user))
    //             .catch(err => console.log(err));
    //         });
    //       });
        }
      });
      return res
    });
  
  // @route POST api/users/login
  // @desc Login user and return JWT token
  // @access Public
//   router.post("/login", (req, res) => {
//     // Form validation
//   const { errors, isValid } = validateLoginInput(req.body);
//   // Check validation
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
//   const email = req.body.email.toLowerCase();
//     const password = req.body.password;
//   // Find user by email
//     User.findOne({ email }).then(user => {
//       // Check if user exists
//       if (!user) {
//         return res.status(404).json({ emailnotfound: "Email not found" });
//       }
//   // Check password
//       bcrypt.compare(password, user.password).then(isMatch => {
//         if (isMatch) {
//           // User matched
//           // Create JWT Payload
//           const payload = {
//             id: user.id,
//             name: user.name
//           };
//   // Sign token
//           jwt.sign(
//             payload,
//             keys.secretOrKey,
//             {
//               expiresIn: 31556926 // 1 year in seconds
//             },
//             (err, token) => {
//               res.json({
//                 success: true,
//                 token: "Bearer " + token,
//               });
//             }
//           );
//         } else {
//           return res
//             .status(400)
//             .json({ passwordincorrect: "Password incorrect" });
//         }
//       });
//     });
//   });
  
  module.exports = router;