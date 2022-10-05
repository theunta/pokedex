const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// models
const User = require("../models/user");

// routes

router.post("/add_fav", (req, res) => {
  const {
    favourite1,
    favourite2,
    favourite3,
    favourite4,
    favourite5,
    favourite6,
    email,
  } = req.body;
  console.log(req.body);

  User.update(
    email,
    favourite1,
    favourite2,
    favourite3,
    favourite4,
    favourite5,
    favourite6
  );
  // .then((res) => res.json({ message: "edited successfully" }));
});
router.post("/", (req, res) => {
  const { name, email, password, avatar } = req.body;
  const {
    favourite1,
    favourite2,
    favourite3,
    favourite4,
    favourite5,
    favourite6,
    trainerID,
  } = "";

  // using bcrypt to create password digest
  const passwordDigest = bcrypt.hashSync(
    password,
    bcrypt.genSaltSync(10),
    null
  );

  User.create(
    name,
    email,
    passwordDigest,
    favourite1,
    favourite2,
    favourite3,
    favourite4,
    favourite5,
    favourite6,
    avatar,
    trainerID
  ).then((userName) => res.json(userName));
});

module.exports = router;
