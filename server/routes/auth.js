const express = require("express");
const User = require("../models/Users");
const { body, query, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

// ROUTE 2: Creating a user using : POST "/api/auth/createuser" - no login required
router.post(
  "/createuser",
  [
    //VALIDATIONS
    body("name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be 8 characters long").isLength({ min: 8 }),
    body("rollno").notEmpty(),
  ],
  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    //If there are errors return bad request and the errors
    if (!errors.isEmpty()) {
      return res.status(400).send({ success, errors: errors.array() });
    }

    try {
      //bcrypt used to create salt
      const salt = await bcrypt.genSalt(10);

      const secPass = await bcrypt.hash(req.body.password, salt);
      //Create a new user
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Email already exist." });
      }

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        rollno: req.body.rollno,
        role: req.body.role,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      // jwt.sign(data, JWT_SECRET);
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData);
      success = true;
      // res.json(user);
      res.json({ success, authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

// ROUTE 1: Authenticating a user using : POST "/api/auth/login" - no login required
router.post(
  "/login",
  [
    // VALIDATIONS
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be 8 characters long")
      .isLength({ min: 8 })
      .exists(),
    body("role").isIn(["student", "caretaker"]), // Validate role
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    // If there are errors return bad request and the errors
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    // Destructuring email, password, and role from the request body
    const { email, password, role } = req.body;

    try {
      // Finds user in the DB
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Incorrect credentials!" });
      }

      // Compares the password entered by user and the hash of password in the DB
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ error: "Incorrect credentials!" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;

      // Navigate based on the role
      if (role === "student") {
        // Navigate to home
        res.json({ success, authToken, role });
      } else if (role === "caretaker") {
        // Navigate to admin panel
        res.json({ success, authToken, role });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error!");
    }
  }
);

module.exports = router;
