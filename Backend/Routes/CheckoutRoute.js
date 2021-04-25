import express from "express";
import privateRoute from "../Middlewears/Authenticate.js";
import { getIndividualProduct } from "../Middlewears/GetIndividualProduct.js";
import Checkout from "../Models/CheckOutModel.js";
const router = express.Router();

router.post("/", privateRoute, async (req, res) => {
  const { orderItems, paymentMethod, paymentResult, address } = req.body;
  if (orderItems.length == 0) {
    return res.status(400).json({ error: "No items" });
  }
  const checkOutProducts = new Checkout({
    user: req.user.id,
    orderItems: orderItems,
    address: address,
    paymentMethod: paymentMethod,
    paymentResult: paymentResult,
  });
  await checkOutProducts.save();
  res.json(checkOutProducts);
});
router.get("/", privateRoute, async (req, res) => {
  const orderedProds = await Checkout.find({ user: req.user.id })
    .populate("orderItems.productID")
    .populate("address");
  res.json(orderedProds);
});
router.get("/all", privateRoute, async (req, res) => {
  const allBoughtProducts = await Checkout.find({ user: req.user.id }).populate("orderItems.productID")
  res.json(allBoughtProducts);
});
router.get("/:id", privateRoute, async (req, res) => {
  const { id } = req.params;
  const singleOrderedProduct = await Checkout.findById(id)
    .populate("orderItems.productID")
    .populate("address");
  res.status(200).json(singleOrderedProduct);
});

export default router;
