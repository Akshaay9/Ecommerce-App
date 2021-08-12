import React, { useEffect, useState } from 'react'
import { useProductContext } from '../../Contexts/ProductListContext/Products';
import FilterUtility from '../../UtilityFunctions/Filter/FilterComponent';

function Filter() {
  
    const {
        state: { initialProducts, loading, filterItems },
        productsDispatch,
    } = useProductContext();

 return (
  <>
      <FilterUtility  dispatch={productsDispatch} products={initialProducts}  filterItems={filterItems}/>
   
  </>
)
}

export default Filter
