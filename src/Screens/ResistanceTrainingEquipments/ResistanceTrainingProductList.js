import axios from "axios";
import React, { useEffect } from "react";
import { useResistanceProductListsContext } from "../../Contexts/ProductListContext/ResistanceTrainingProductListing";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";


function ResistanceTrainingProductList() {
  // grabbing context API
  const {
    state: { initialResistanceProducts, loading,filterItems},
    ResistanceProductDispatch,
  } = useResistanceProductListsContext();


  useEffect(() => {
    makeAnAPICall(
      "GET",
      "/api3/products/resistanceEquipments",
      ResistanceProductDispatch,
      "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS"
    );
  }, []);

  return (
    <ProductListingComponentUtility filterItems={filterItems} products={ initialResistanceProducts}/>
  );
}

export default ResistanceTrainingProductList;
