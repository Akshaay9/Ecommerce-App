import express from "express";
import privateRoute from "../Middlewears/Authenticate.js";
import Products from "../Models/ProductsModel.js";
import Cart from "../Models/CartModel.js";
const router = express.Router();

router.param("productID", async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid product id" });
    }
    const singleProduct = await Products.findById(id);
    if (!singleProduct) {
      res.status(400).json({ error: "product not found" });
    }
    req.singleProduct = singleProduct;
    next();
  } catch (error) {
    console.log(error);
  }
});

router
  .route("/:productID")
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
