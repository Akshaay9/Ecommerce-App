import React, { useEffect, useState } from 'react'
import { useProductContext } from '../../Contexts/ProductListContext/Products';
import FilterUtility from '../../UtilityFunctions/Filter/FilterComponent';
import ProductScreenList from './ProductScreenList'

function Filter() {
  
    const {
        state: { initialProducts, loading, filterItems },
        productsDispatch,
    } = useProductContext();

 return (
  <>
      <FilterUtility  dispatch={productsDispatch} products={initialProducts} />
   
  </>
)
}

export default Filter
