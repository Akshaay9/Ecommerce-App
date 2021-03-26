import axios from "axios";

const { createContext, useContext, useReducer } = require("react");

// created context for home scrren products
export const mensNewDropProductListsContext = createContext();

// initial state
const initialStateOfMensNewDropProducts = {
  initialHomeScrrenProducts: [],
  loading: true,
};

// usereducer finctions
const mensNewDropProductReduceFun = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS":
      return {
        ...state,
        initialHomeScrrenProducts: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const MensNewDropProductListsFunction = ({ children }) => {
  const [state, dispatch] = useReducer(mensNewDropProductReduceFun, initialStateOfMensNewDropProducts);
 
  return (
    <mensNewDropProductListsContext.Provider value={{state,homeScreenProductDispatch:dispatch}}>
      {children}
    </mensNewDropProductListsContext.Provider>
  );
};

// function to use context
export const useMensNewProductListsContext = () => {
  return useContext(mensNewDropProductListsContext);
};
