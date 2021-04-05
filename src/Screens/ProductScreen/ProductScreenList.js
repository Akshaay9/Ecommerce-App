import React from "react";
import { useProductContext } from "../../Contexts/ProductListContext/Products";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";

function ProductScreenList({ filterData }) {
  const {
    state: { initialProducts, loading,},
    productsDispatch,
    } = useProductContext();
   
  return (
    <ProductListingComponentUtility filterData={filterData} products={ initialProducts}/>
      
      );
}

export default ProductScreenList;
