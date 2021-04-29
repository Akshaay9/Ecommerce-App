import axios from "axios";
import React, { useEffect } from "react";
import { useWomensNewProductListsContext } from "../../Contexts/ProductListContext/WomensNewDropProductListing";
import CatalogMagic from "../../Skeleton-loader/ProductListingLoader";
import MobileSkeletonLoader from "../../Skeleton-loader/ProductListingLoaderMobile";
import { makeAnAPICall } from "../../APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";

function WomensNewDropProductListing() {
  const {
    state: { initialHomeScreenProductWomens, loading, filterItems },
    womensNewProductDispatch,
  } = useWomensNewProductListsContext();

  useEffect(() => {
    makeAnAPICall(
      "GET",
      "https://stark-falls-25364.herokuapp.com/api/products/womensNewDrop",
      womensNewProductDispatch,
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
        products={initialHomeScreenProductWomens}
      />
    </>
  );
}

export default WomensNewDropProductListing;
