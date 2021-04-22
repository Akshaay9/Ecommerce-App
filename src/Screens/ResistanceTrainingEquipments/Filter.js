import React, { useEffect, useState } from 'react'
import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"
import { useResistanceProductListsContext } from '../../Contexts/ProductListContext/ResistanceTrainingProductListing';

function Filter() {


 // grabbing context API
 const {
   state: { initialResistanceProducts, loading, filterItems },
   ResistanceProductDispatch,
    } = useResistanceProductListsContext();

 
    return (
      <>
      <FilterUtility  dispatch={ResistanceProductDispatch} products={initialResistanceProducts} filterItems={filterItems} />
       
      </>
    )
}

export default Filter

