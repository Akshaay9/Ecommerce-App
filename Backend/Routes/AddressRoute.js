import express from "express";
import privateRoute from "../Middlewears/Authenticate.js";
import Address from "../Models/ShippingAddressModel.js"
const router=express.Router()

router.route("/")
    .post(privateRoute, async (req, res) => {
        const { address, city, postalCode, country } = req.body
        const data = await Address.findOne({ user: req.user.id })
        if (data == null) {
            const newAddress = await  new Address({
                user: req.user.id,
                address: address,
                city: city,
                postalCode: postalCode,
                country:country
            })
            await newAddress.save()
            res.status(200).json(newAddress)
        }
        else {
            res.status(200).json(data)
        }
    })
export default router