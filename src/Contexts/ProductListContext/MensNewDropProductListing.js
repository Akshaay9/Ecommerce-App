const { createContext, useContext, useReducer } = require("react");
// created context for home scrren products
export const mensNewDropProductListsContext = createContext();
// initial state
const initialStateOfMensNewDropProducts = {
  initialHomeScrrenProducts: [],
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
const mensNewDropProductReduceFun = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS":
      return {
        ...state, 
        initialHomeScrrenProducts: payload,
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          sort:"lowToHigh"
        },
      }
    case "HIGH_TO_LOW":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          sort:"HighToLow"
        },
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
        loading:true,
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

export const MensNewDropProductListsFunction = ({ children }) => {
  const [state, dispatch] = useReducer(
    mensNewDropProductReduceFun,
    initialStateOfMensNewDropProducts
  );

  return (
    <mensNewDropProductListsContext.Provider
      value={{ state, homeScreenProductDispatch: dispatch }}
    >
      {children}
    </mensNewDropProductListsContext.Provider>
  );
};

// function to use context
export const useMensNewProductListsContext = () => {
  return useContext(mensNewDropProductListsContext);
};
