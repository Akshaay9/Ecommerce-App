import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"
import { mensNewDropProductListAPI } from "../../API/MensNewDropProducts";
import { useGymAccessoriesContext } from '../../Contexts/ProductListContext/GymAccessories';
mensNewDropProductListAPI();
function Filter() {

  const {
    state: { initialGymAccessories, loading, filterItems },
    gymAccessoriesDispatch
  } = useGymAccessoriesContext();
    

 
  return (
    <>
      <FilterUtility dispatch={gymAccessoriesDispatch} products={initialGymAccessories} filterItems={filterItems}/>
     
    </>
  )
}


export default Filter

