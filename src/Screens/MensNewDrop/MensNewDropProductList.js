import axios from "axios";
import React, { useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useMensNewProductListsContext } from "../../Contexts/ProductListContext/MensNewDropProductListing";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { makeAnAPICall } from "../../APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";
import CatalogMagic from "../../Skeleton-loader/ProductListingLoader";
import MobileSkeletonLoader from "../../Skeleton-loader/ProductListingLoaderMobile";
import { BE_URL } from "../../const";

function MensNewDropProductList() {
  const {
    homeScreenProductDispatch,
    state: { initialHomeScrrenProducts, filterItems, loading },
  } = useMensNewProductListsContext();

  useEffect(() => {
    makeAnAPICall(
      "GET",
      `${BE_URL}/api/products/mensNewdrop`,
      homeScreenProductDispatch,
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
        products={initialHomeScrrenProducts}
        filterItems={filterItems}
      />
    </>
  );
}

export default MensNewDropProductList;
