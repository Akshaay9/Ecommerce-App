import axios from "axios";
import React, { useEffect } from "react";
import { useGymAccessoriesContext } from "../../Contexts/ProductListContext/GymAccessories";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";

function GymAccessoriesProductList() {
  // grabbing Context API
  const {
    state: { initialGymAccessories, loading, filterItems },
    gymAccessoriesDispatch,
  } = useGymAccessoriesContext();

  // fetch API
  useEffect(() => {
    makeAnAPICall(
      "GET",
      "https://stark-falls-25364.herokuapp.com/api/products/gymAccessories",
      gymAccessoriesDispatch,
      "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS"
    );
  }, []);

  return (
    <ProductListingComponentUtility
      filterItems={filterItems}
      products={initialGymAccessories}
    />
  );
}

export default GymAccessoriesProductList;
