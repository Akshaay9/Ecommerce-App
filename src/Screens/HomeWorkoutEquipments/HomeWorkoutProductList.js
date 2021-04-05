import axios from 'axios';
import React, { useEffect } from 'react'
import { useWorkoutNewProductListsContext } from '../../Contexts/ProductListContext/HomeWorkoutProductListing';
import { makeAnAPICall } from "../../UtilityFunctions/APiCalls"
import ProductListingComponentUtility from '../../UtilityFunctions/ProductListingComponentUtility';



function HomeWorkoutProductList({ filterData }) {
    
 // grabbing context API
 const {
    state: { initialHomeWorkoutProducts, loading, filterItems },
    homeWorkoutDispatch,
  } = useWorkoutNewProductListsContext();

    useEffect(() => {
          makeAnAPICall("GET","/api2/products/homeWorkout",homeWorkoutDispatch,"LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS" )
    }, []);
  
   
    return (
    <ProductListingComponentUtility filterData={filterData} products={initialHomeWorkoutProducts} />
    )
}

export default HomeWorkoutProductList
