import Products from "../Models/ProductsModel.js";

export const getIndividualProduct = async (req, res, next, id) => {
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
}