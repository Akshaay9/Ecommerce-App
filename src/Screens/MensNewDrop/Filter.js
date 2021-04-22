import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"
import { useMensNewProductListsContext } from "../../Contexts/ProductListContext/MensNewDropProductListing";

function Filter() {

  // grabbing context API
  const {
    state: { initialHomeScrrenProducts, loading, filterItems },
    homeScreenProductDispatch,
  } = useMensNewProductListsContext();


  return (

    <>
      <FilterUtility  dispatch={homeScreenProductDispatch} products={initialHomeScrrenProducts} filterItems={filterItems} />
      </>
)
}

export default Filter;
