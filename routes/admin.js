const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const { body } = require("express-validator/check");
const User = require("../models/User");
// Routes
router.post("/login", adminController.authenticate);

router.get("/signup", adminController.showSignup);

router.post(
  "/signup",
  // [
  //   body("email")
  //     .isEmail()
  //     .withMessage("Please enter a valid email.")
  //     .custom(async (value, { req }) => {
  //       await User.findOne({ where: { email: value } }).then(user => {
  //         if (user) {
  //           return Promise.reject("E-mail already exists!!");
  //         }
  //       }).catch(err => console.log(err));
  //       return true;
  //     }),
  //     // .normalizeEmail(),
  //   body("password").trim().isLength({ min: 5 }),
  //   body("username").trim().not().isEmpty,
  //   body("dob").trim().isDate()
  // ],
  adminController.signup
);

router.post("/forgot-password", adminController.changePassword);

module.exports = router;
