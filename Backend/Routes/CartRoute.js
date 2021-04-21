import express from "express";
import privateRoute from "../Middlewears/Authenticate.js";
import Cart from "../Models/CartModel.js";
import {getIndividualProduct} from "../Middlewears/GetIndividualProduct.js"
const router = express.Router();

router.param("productID",getIndividualProduct );

router
  .route("/:productID?")
  .get( privateRoute, async(req, res) => {
    const cart = await Cart.find({ user: req.user.id }).populate('productID');
    res.json(cart)
})
  .post(privateRoute, async (req, res) => {
    const { singleProduct } = req;
    const isProductPresentInCart = await Cart.find({
      user: req.user.id,
      productID: singleProduct._id,
    });
      if (isProductPresentInCart.length > 0) {
          isProductPresentInCart[0].inCartQty = req.body.inCartQty
          await isProductPresentInCart[0].save()
          res.json(isProductPresentInCart[0])
    } else {
      const addToCart = new Cart({
        productID: singleProduct._id,
        inCartQty: 1,
        user: req.user.id,
      });
        
      const saveAddToCart = await addToCart.save();
      res.status(200).json(saveAddToCart);
    }
  })

  .delete(privateRoute, async (req, res) => {
    await Cart.findOneAndDelete(
      { user: req.user.id },
      { productID: req.singleProduct._id }
    );
    return res.json("deleted");
  })

export default router;