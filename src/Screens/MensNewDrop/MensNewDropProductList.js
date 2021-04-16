import axios from "axios";
import React, { useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useMensNewProductListsContext } from "../../Contexts/ProductListContext/MensNewDropProductListing";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls"
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";



function MensNewDropProductList() {

  const {
    homeScreenProductDispatch,
    state: { initialHomeScrrenProducts,filterItems },
  } = useMensNewProductListsContext();

  useEffect(() => {
    makeAnAPICall("GET","/api/products/mensNewDrops",homeScreenProductDispatch,"LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS" )
  }, []);

  return (
    <ProductListingComponentUtility products={initialHomeScrrenProducts} filterItems={filterItems}/>
  );
}

export default MensNewDropProductList;
