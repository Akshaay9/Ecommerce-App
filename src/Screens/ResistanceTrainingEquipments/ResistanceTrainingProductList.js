import axios from "axios";
import React, { useEffect } from "react";
import { useResistanceProductListsContext } from "../../Contexts/ProductListContext/ResistanceTrainingProductListing";
import { makeAnAPICall } from "../../APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";
import CatalogMagic from "../../Skeleton-loader/ProductListingLoader";
import MobileSkeletonLoader from "../../Skeleton-loader/ProductListingLoaderMobile";
import { BE_URL } from "../../const";

function ResistanceTrainingProductList() {
  // grabbing context API
  const {
    state: { initialResistanceProducts, loading, filterItems },
    ResistanceProductDispatch,
  } = useResistanceProductListsContext();

  useEffect(() => {
    makeAnAPICall(
      "GET",
      `${BE_URL}/api/products/resistanceTrainingEquipment`,
      ResistanceProductDispatch,
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
        products={initialResistanceProducts}
      />
    </>
  );
}

export default ResistanceTrainingProductList;
