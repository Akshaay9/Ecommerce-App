import axios from "axios";
import React, { useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { NavLink } from "react-router-dom";
import { useYogaProductListsContext } from "../../Contexts/ProductListContext/YogaEquipmentLists";
import { makeAnAPICall } from "../../APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";
import CatalogMagic from "../../Skeleton-loader/ProductListingLoader";
import MobileSkeletonLoader from "../../Skeleton-loader/ProductListingLoaderMobile";
import { BE_URL } from "../../const";

function YogaProductList() {
  // grabbing context API
  const {
    state: { initialYogaProducts, loading, filterItems },
    yogaProductDispatch,
  } = useYogaProductListsContext();

  useEffect(() => {
    makeAnAPICall(
      "GET",
      `${BE_URL}/api/products/yogaEquipment`,
      yogaProductDispatch,
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
        products={initialYogaProducts}
      />
    </>
  );
}
export default YogaProductList;
