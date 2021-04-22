import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"
import { useYogaProductListsContext } from '../../Contexts/ProductListContext/YogaEquipmentLists';
function Filter() {

 const {
    state: { initialYogaProducts, loading, filterItems },
    yogaProductDispatch,
  } = useYogaProductListsContext();
  
 
 
    return (
      <>
       <FilterUtility  dispatch={yogaProductDispatch} products={initialYogaProducts} filterItems={filterItems} />
      </>
    )
}

export default Filter
