import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"
import React, { useEffect, useState } from "react";
import { useMensNewProductListsContext } from "../../Contexts/ProductListContext/MensNewDropProductListing";
import { mensNewDropProductListAPI } from "../../API/MensNewDropProducts";

mensNewDropProductListAPI();


function Filter() {

  // grabbing context API
  const {
    state: { initialHomeScrrenProducts, loading, filterItems },
    homeScreenProductDispatch,
  } = useMensNewProductListsContext();

console.log("initialHomeScrrenProducts",initialHomeScrrenProducts);
  return (

    <>
      <FilterUtility  dispatch={homeScreenProductDispatch} products={initialHomeScrrenProducts} />
      </>
)
}

export default Filter;
