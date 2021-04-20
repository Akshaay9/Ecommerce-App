import express from "express";
import User from "../Models/UserModels.js";
import jwt from "jsonwebtoken";
import config from "config";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import assignJWT from "../Middlewears/AssignJWT.js";
const router = express.Router();

router
  .route("/")
  // user registration
  .post(
    [
      check("name", "Please enter a name").isLength({ min: 5 }),
      check("email", "Please enter a valid email").matches(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      ),
      check("password", "please enter a valid password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,15}$/
      ),
    ],
    async (req, res) => {
      const { name, email, password } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.json({ error: "user alredy exists" });
      }
      const newUser = new User({
        name,
        email,
        password,
      });
        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(password, salt)
        const savedUser = await newUser.save()
        res.json({
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            token:assignJWT(savedUser._id)
        })
      }
    
    
)
    
    
    
  // user login
  .get( [
    check("email", "Please enter a valid email").matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    ),
    check("password", "please enter a valid password").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,15}$/
    ),
  ], async (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
          return res.json({errors:errors.array()})
      }
      const {email,password}=req.body
      const user = await User.findOne({ email })
      if (!user) {
        return res.json({error:"user not found please login"})
      }
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        token:assignJWT(user._id)
    })
      
  });

export default router;
