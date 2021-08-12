import React, { useEffect, useState } from "react";
import { useWorkoutNewProductListsContext } from "../../Contexts/ProductListContext/HomeWorkoutProductListing";
import FilterUtility from "../../UtilityFunctions/Filter/FilterComponent";


function Filter() {
 
  // grabbing context API
  const {
    state: { initialHomeWorkoutProducts, loading, filterItems },
    homeWorkoutDispatch,
  } = useWorkoutNewProductListsContext();

  

  return (
    <>
       <FilterUtility  dispatch={homeWorkoutDispatch} products={initialHomeWorkoutProducts} filterItems={filterItems} />
     </>
  );
}

export default Filter;
