import axios from "axios";
import React, { useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useMensNewProductListsContext } from "../../Contexts/ProductListContext/MensNewDropProductListing";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { makeAnAPICall } from "../../UtilityFunctions/APiCalls"
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListingComponentUtility";



function MensNewDropProductList({ filterData }) {

  const {
    homeScreenProductDispatch,
    state: { initialHomeScrrenProducts },
  } = useMensNewProductListsContext();

  useEffect(() => {
    makeAnAPICall("GET","/api/products/mensNewDrops",homeScreenProductDispatch,"LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS" )
  }, []);


  return (
    <ProductListingComponentUtility filterData={filterData} products={ initialHomeScrrenProducts}/>
  );
}

export default MensNewDropProductList;
