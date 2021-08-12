import express from "express"
import privateRoute from "../Middlewears/Authenticate.js";
const router = express.Router()
import Cart from "../Models/CartModel.js";

router.delete("/",privateRoute, async (req, res) => {
    // const CartItems = await Cart.find({ user: req.user.id })
await Cart.remove({user:req.user.id})
    res.status(200).json("cart has been deleted")
    // res.json(CartItems)
})
export default router