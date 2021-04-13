import React from "react";
import { useProductContext } from "../../Contexts/ProductListContext/Products";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";

function ProductScreenList() {
  const {
    state: { initialProducts, loading,filterItems},
    productsDispatch,
    } = useProductContext();
   
  return (
    <ProductListingComponentUtility products={initialProducts} filterItems={filterItems}/>
      
      );
}

export default ProductScreenList;
