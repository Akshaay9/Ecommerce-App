import React, { useEffect, useState } from 'react'
import { useWomensNewProductListsContext } from '../../Contexts/ProductListContext/WomensNewDropProductListing';
import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"



function Filter() {
 // grabbing context API
 const {
  state: { initialHomeScreenProductWomens, loading, filterItems },
  womensNewProductDispatch,
} = useWomensNewProductListsContext();
 

    return (
      <>
       <FilterUtility  dispatch={womensNewProductDispatch} products={initialHomeScreenProductWomens}  filterItems={filterItems} />
      </>
    )
}

export default Filter
