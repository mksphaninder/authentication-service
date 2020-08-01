const User = require("../models/User");
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

exports.authenticate = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const dob = req.body.dob;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (user) {
        return res.status(405).json({
          message: "Email already exists",
        });
      }
    })
    .catch((err) => console.log(err));
};

exports.showSignup = (req, res) => {
    res.status(200).json({message: "working"});
}

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("validation failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const username = req.body.username;
  const email = req.body.email;
  const dob = req.body.dob;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      return User.create({
        email: email,
        username: username,
        dob: dob,
        password: hashedPassword,
      });
    })
    .then(user => {
        console.log('here');
        console.log(user);
        res.status(201).json(user);
    })
    .catch((err) => {
        console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.changePassword = (req, res, next) => {};
