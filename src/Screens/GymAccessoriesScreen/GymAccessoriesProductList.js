import axios from 'axios';
import React, { useEffect } from 'react'
import {useGymAccessoriesContext} from "../../Contexts/ProductListContext/GymAccessories"
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls"
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";


function GymAccessoriesProductList({filterData}) {
    // grabbing Context API
    const {
      state: { initialGymAccessories, loading, filterItems },
      gymAccessoriesDispatch,
  } = useGymAccessoriesContext();

  // fetch API
    useEffect(() => {
        makeAnAPICall("GET","/api5/products/gymAccessories",gymAccessoriesDispatch,"LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS" )
    }, []);
  
  return (
    <ProductListingComponentUtility filterData={filterData} products={ initialGymAccessories}/>
  );
}

export default GymAccessoriesProductList
