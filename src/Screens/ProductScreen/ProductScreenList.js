import React, { useEffect } from "react";
import { useProductContext } from "../../Contexts/ProductListContext/Products";
import { makeAnAPICall } from "../../APiCalls";
import ProductListingComponentUtility from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingComponentUtility";
import CatalogMagic from "../../Skeleton-loader/ProductListingLoader";
import MobileSkeletonLoader from "../../Skeleton-loader/ProductListingLoaderMobile";
import { BE_URL } from "../../const";


function ProductScreenList() {
  const {
    state: { initialProducts, loading, filterItems },
    productsDispatch,
  } = useProductContext();

  useEffect(() => {
    makeAnAPICall(
      "GET",
      `${BE_URL}/api/products/all`,
      productsDispatch,
      "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS"
    );
  }, []);

  let imgaeheight = "imgaeheight";

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
        imgaeheight={imgaeheight}
        products={initialProducts}
        filterItems={filterItems}
      />
    </>
  );
}

export default ProductScreenList;
