import React, { useEffect, useState } from 'react'
import { useWomensNewProductListsContext } from '../../Contexts/ProductListContext/WomensNewDropProductListing';
import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"
import WomensNewDropProductListing from './WomensNewDropProductListing';
import { mensNewDropProductListAPI } from "../../API/MensNewDropProducts";

mensNewDropProductListAPI(); 
function Filter() {
 // grabbing context API
 const {
  state: { initialHomeScreenProductWomens, loading, filterItems },
  womensNewProductDispatch,
} = useWomensNewProductListsContext();
 

    return (
      <>
       <FilterUtility  dispatch={womensNewProductDispatch} products={initialHomeScreenProductWomens} />
      </>
    )
}

export default Filter
