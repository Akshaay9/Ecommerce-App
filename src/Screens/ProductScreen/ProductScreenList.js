import React, { useEffect } from "react";
import { useProductContext } from "../../Contexts/ProductListContext/Products";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";

function ProductScreenList() {
  const {
    state: { initialProducts, loading,filterItems},
    productsDispatch,
  } = useProductContext();

  useEffect(() => {
    makeAnAPICall("GET","https://stark-falls-25364.herokuapp.com/api/products/all",productsDispatch,"LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS" )
  }, []);
  
   
  return (
    <ProductListingComponentUtility products={initialProducts} filterItems={filterItems}/>
      
      );
}

export default ProductScreenList;
