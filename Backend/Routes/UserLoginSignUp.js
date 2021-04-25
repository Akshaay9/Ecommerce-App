import express from "express";
import User from "../Models/UserModels.js";
import jwt from "jsonwebtoken";
import config from "config";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import assignJWT from "../Middlewears/AssignJWT.js";
const router = express.Router();


// user registration
router.post("/signup",
    [
      check("name", "Please enter a name").isLength({ min: 5 }),
      check("password", "please enter a valid password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,15}$/
      ),
    ],
    async (req, res) => {
      const { name, email, password } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: "user alredy exists,Please sign in" });
      }
      const newUser =await  User.create({
        name,
        email,
        password,
      });
        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(password, salt)
       await newUser.save()
        res.status(200).json({
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token:assignJWT(newUser._id)
        })
      }
    
    
)
    
    
    
  // user login
  router.post("/login", [
    check("email", "Please enter a name").isLength({ min: 5 }),
    check("password", "please enter a valid password").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,15}$/
    ),
  ], async (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
          return res.status(400).json({errors:errors.array()})
    }
    
    const { email, password } = req.body
    console.log(req.body);
    console.log(req.body);
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({error:"user not found,please login"})
    }
    const checkPassword = await bcrypt.compare( password,user.password)
    if (!checkPassword)
    {
      return res.status(400).json({error:"invalid credentials"})
    }
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        token:assignJWT(user._id)
    })
      
  });

export default router;
