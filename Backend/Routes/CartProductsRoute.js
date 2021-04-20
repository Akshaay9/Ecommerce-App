import express from "express";
import privateRoute from "../Middlewears/Authenticate.js";
import Products from "../Models/ProductsModel.js";
import Cart from "../Models/CartModel.js";
const router = express.Router();

router.get("/", privateRoute, async(req, res) => {
    const cart = await Cart.find({ user: req.user.id }).populate('productID');
    res.json(cart)
})

export default router;