import  FilterUtility from "../../UtilityFunctions/Filter/FilterComponent"

import { useGymAccessoriesContext } from '../../Contexts/ProductListContext/GymAccessories';

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

