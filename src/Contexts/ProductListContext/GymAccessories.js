const { createContext, useContext, useReducer } = require("react");
// created context for home scrren products
export const gymAccessoriesContext = createContext();
// initial state
const initialStateOfGymAccessories = {
  initialGymAccessories: [],
  loading:true,
  filterItems: {
   sort:"",
  stock:"",
    rating: false,
 delivery:"",
    productTags: [],
    price_range:null
  }
};

// usereducer finctions
const GymAccessoriesReduceFun = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS":
      return {
        ...state, 
        initialGymAccessories: payload,
        loading: false,
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          sort:"lowToHigh"
        },
        loading:false,
      }
    case "HIGH_TO_LOW":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          sort:"HighToLow"
        },
        loading:false,
      }
    case "IN_STOCK":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          stock:"in"
        },
        loading:false,
      }
    case "OUT_OF_STOCK":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          stock:"out"
        },
        loading:false,
      }
    case "RATING":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          rating:payload
        },
        loading:false,
      }
    case "FREE_DELIVERY":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          delivery:"free"
        },
        loading:false,
      }
    case "EXPRESS_DELIVERY":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          delivery:"express"
        },
        loading:false,
      }
   
      case "FILTER_BY_PRODUCT_TAGS":
      const isproductAlredyExist = state.filterItems.productTags.indexOf(payload)
      console.log(isproductAlredyExist);
      return {
        ...state,
    
        filterItems: {
          ...state.filterItems,
          productTags:isproductAlredyExist>=0?state.filterItems.productTags.filter((ele)=>ele!==payload):[...state.filterItems.productTags,payload]
        },
        loading:false,
      }
    case "PRICE_RANGE":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          price_range:payload
        },
        loading:false,
      }
    case "CLEAR_FILTERS":
      return {
        ...state,
      
        filterItems: {
         
            sort:"",
           stock:"",
             rating: false,
          deliver:"",
             productTags: [],
             price_range:null
           
        }
      }
    
    default:
      return state;
  }
};

export const GymAccessoriesFunction = ({ children }) => {
  const [state, dispatch] = useReducer(
    GymAccessoriesReduceFun,
    initialStateOfGymAccessories
  );

  return (
    <gymAccessoriesContext.Provider
      value={{ state, gymAccessoriesDispatch: dispatch }}
    >
      {children}
    </gymAccessoriesContext.Provider>
  );
};

// function to use context
export const useGymAccessoriesContext = () => {
  return useContext(gymAccessoriesContext);
};
