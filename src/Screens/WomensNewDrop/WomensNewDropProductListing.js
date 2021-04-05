import axios from "axios";
import React, { useEffect } from "react";
import { useWomensNewProductListsContext } from "../../Contexts/ProductListContext/WomensNewDropProductListing";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls"
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";


function WomensNewDropProductListing({ filterData }) {

 const {
    state: { initialHomeScreenProductWomens, loading,},
    womensNewProductDispatch,
  } = useWomensNewProductListsContext();

  useEffect(() => {
    makeAnAPICall("GET","/api1/products/womensNewDrop",womensNewProductDispatch,"LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS" )
  }, []);

  
  return (
    <ProductListingComponentUtility filterData={filterData} products={ initialHomeScreenProductWomens}/>
  ) 
}

export default WomensNewDropProductListing;



