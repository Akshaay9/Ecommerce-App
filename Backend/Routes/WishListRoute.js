import express from "express";
import privateRoute from "../Middlewears/Authenticate.js";
import WishList from "../Models/WishListModel.js";
import { getIndividualProduct } from "../Middlewears/GetIndividualProduct.js";
const router = express.Router();

router.param("wishlistID", getIndividualProduct);

router
  .route("/:wishlistID?")
  .get(privateRoute, async (req, res) => {
    const cart = await WishList.find({ user: req.user.id }).populate(
      "productID"
    );
    res.json(cart);
  })
  .post(privateRoute, async (req, res) => {
    const { singleProduct } = req;
    const isProductAlredyWished = await WishList.find({
      user: req.user.id,
      productID: singleProduct._id,
    });

    if (isProductAlredyWished.length > 0) {
      res.status(200).json({ error: "PRoduct alredy wishlisted" });
    } else {
      const newWishListItem = new WishList({
        user: req.user.id,
        productID: singleProduct._id,
      });
      await newWishListItem.save();
      res.json(newWishListItem);
    }
  })
  .delete(privateRoute, async (req, res) => {
    await WishList.findOneAndDelete(
      { user: req.user.id },
      { productID: req.singleProduct._id }
    );
    return res.json("deleted");
  });

export default router;
