import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"
import { useYogaProductListsContext } from '../../Contexts/ProductListContext/YogaEquipmentLists';
import { mensNewDropProductListAPI } from "../../API/MensNewDropProducts";
mensNewDropProductListAPI();
function Filter() {

 const {
    state: { initialYogaProducts, loading, filterItems },
    yogaProductDispatch,
  } = useYogaProductListsContext();
  
 
 
    return (
      <>
       <FilterUtility  dispatch={yogaProductDispatch} products={initialYogaProducts} />
      </>
    )
}

export default Filter
