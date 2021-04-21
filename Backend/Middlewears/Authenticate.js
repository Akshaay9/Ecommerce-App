import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config();
import User from "../Models/UserModels.js"

export default async function privateRoute(req,res,next) {
  
        const token = req.header("auth-token")
        if (!token) {
            return res.status(200).json("Unauthorized section")
        }
    try {
        const decoded =  jwt.verify(token, process.env.JWT)
        req.user=decoded
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send("auth error")
    }
}