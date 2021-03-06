const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

router.post("/profession", (req, res) => {
  User.findOneAndUpdate({ email: req.body.email.toLowerCase() }, { profession: req.body.profession }).then(user => {
    if (!user) {
      return res.status(400).json({ email: "User not found" });
    } else {
      return res.status(200).json({ Sucess: "Success" })
    }
  })
})

router.get("/profession", (req, res) => {
  User.findOneAndUpdate({ email: req.body.email.toLowerCase() }).then(user => {
    if (!user) {
      return res.status(400).json({ email: "User not found" });
    } else {
      return res.status(200).json( user.profession )
    }
  })
})

router.post("/interests", (req, res) => {
  User.findOneAndUpdate({ email: req.body.email.toLowerCase() }, { $push: { interests: req.body.interests } }).then(user => {
    if (!user) {
      return res.status(400).json({ email: "User not found" });
    } else {
      return res.status(200).json({ Sucess: "Success" })
    }
  })
})



router.get("/interests", (req, res) => {
  User.findOne({ email: req.body.email.toLowerCase() }).then(user => {
    if (!user) {
      return res.status(400).json({ email: "User not found" });
    } else {
      return res.status(200).json( user.interests )
    }
  })
})


router.get("/post", (req, res) => {
  User.findOne({ email: req.body.email.toLowerCase() }).then(user => {
    if (!user) {
      return res.status(400).json({ email: "User not found" });
    } else {
      let temp = user.discussHistory
      return res.status(200).json({ temp })
    }
  })
})



// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email.toLowerCase() }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email.toLowerCase(),
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email.toLowerCase();
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;