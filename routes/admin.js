const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const { body, check } = require("express-validator/check");
const User = require("../models/User");
const isAuth = require("../middleware/is-auth");
// Routes
router.post("/login", adminController.authenticate);

router.post(
  "/signup",
  [
    body("email")
      .trim()
      .isEmail()
      .custom(async (value, { req }) => {
        return User.findOne({ where: { email: value } }).then((user) => {
          if (user) {
            return Promise.reject("E-mail already exists!!");
          }
        });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("password should be at least 5 characters"),
    body("username")
      .trim()
      .isLength({ min: 3 })
      .withMessage("username should be at least 3 characters"),
    body("dob").trim().isDate(),
  ],
  adminController.signup
);

router.get("/is-authorized", isAuth, adminController.isAuthenticated);

router.post("/forgot-password", adminController.changePassword);

router.get("/users/:id", adminController.getUserDetails);

module.exports = router;
