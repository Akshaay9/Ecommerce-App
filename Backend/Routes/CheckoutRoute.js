import express from "express";
import privateRoute from "../Middlewears/Authenticate.js";
import { getIndividualProduct } from "../Middlewears/GetIndividualProduct.js";
import Checkout from "../Models/CheckOutModel.js";
const router = express.Router();

router.route("/")
    .post(privateRoute, async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
    } = req.body
    if (orderItems.length == 0) {
       return res.status(200).json({error:"No items"})
        }
        const checkOutProducts = new Checkout({
            user: req.user.id,
            orderItems,
            shippingAddress,
            paymentMethod
        })
        await checkOutProducts.save()
        res.json(checkOutProducts)
    })
    .get( privateRoute, async (req, res) => {
        const orderedProds = await Checkout.find({ user: req.user.id }).populate("orderItems.productID")
        res.json(orderedProds)
    })


export default router;
