import express from "express";
import privateRoute from "../Middlewears/Authenticate.js";
import Address from "../Models/ShippingAddressModel.js";
import pkg from "lodash";
const { extend } = pkg;
const router = express.Router();

router.param("addresses", async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid product id" });
    }
    const singleAddress = await Address.findById(id);
    if (!singleAddress) {
      res.status(400).json({ error: "Address not found" });
    }
    req.singleAddress = singleAddress;
    next();
  } catch (error) {
    console.log(error);
  }
});

router.get("/", privateRoute, async (req, res) => {
  const allAddress = await Address.find({ user: req.user.id });
  res.status(200).json(allAddress);
});
router.get("/:addresses", privateRoute, async (req, res) => {
  const { singleAddress } = req;
  res.status(200).json(singleAddress);
});

router.post("/:addresses?", privateRoute, async (req, res) => {
  const { singleAddress } = req;
  const { address, city, postalCode, country } = req.body;
  let updateAddress = req.body;
  if (singleAddress != undefined) {
    updateAddress = extend(singleAddress, updateAddress);
    await updateAddress.save();
    const allAddress = await Address.find({ user: req.user.id });
    res.status(200).json(allAddress);
  } else {
    const newAddress = await new Address({
      user: req.user.id,
      address: address,
      city: city,
      postalCode: postalCode,
      country: country,
    });

    await newAddress.save();
    const allAddress = await Address.find({ user: req.user.id });
    res.status(200).json(allAddress);
  }
});

router.delete("/:addresses", privateRoute, async (req, res) => {
  const { singleAddress } = req;
  await Address.findByIdAndDelete(singleAddress._id);
  const allAddress = await Address.find({ user: req.user.id });
  res.status(200).json(allAddress);
});

export default router;
