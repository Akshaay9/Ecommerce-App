import axios from "axios";
import React, { useEffect } from "react";
import { useGymAccessoriesContext } from "../../Contexts/ProductListContext/GymAccessories";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";
import CatalogMagic from "../../Skeleton-loader/ProductListingLoader";
import MobileSkeletonLoader from "../../Skeleton-loader/ProductListingLoaderMobile";

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
    <>
      {loading && (
        <>
          <div className="desktop-skeleton-loader">{<CatalogMagic />}</div>
          <div className="mobile-skeleton-loader">
            {<MobileSkeletonLoader />}
          </div>
        </>
      )}
      <ProductListingComponentUtility
        filterItems={filterItems}
        products={initialGymAccessories}
      />
    </>
  );
}

export default GymAccessoriesProductList;
