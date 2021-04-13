import axios from "axios";
import React, { useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { NavLink } from "react-router-dom";
import { useYogaProductListsContext } from "../../Contexts/ProductListContext/YogaEquipmentLists";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls"
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";


function YogaProductList() {
  // grabbing context API
  const {
    state: { initialYogaProducts, loading,filterItems},
    yogaProductDispatch,
  } = useYogaProductListsContext();

  useEffect(() => {
    makeAnAPICall("GET","/api4/products/yogaEquipment",yogaProductDispatch,"LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS" )
  }, []);
 

  return (
    <ProductListingComponentUtility filterItems={filterItems} products={ initialYogaProducts}/>
   
  );
}
export default YogaProductList;
