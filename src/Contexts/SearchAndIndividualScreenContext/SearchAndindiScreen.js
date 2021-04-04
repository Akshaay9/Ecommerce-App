const { createContext, useContext, useReducer } = require("react");
// created context for home scrren products
export const allProductsContext = createContext();
// initial state
const initialStateOfAllProducts = {
  initialAllProducts: [],
  searchResult: [],
  loading: true,
  filterItems: {
    sort: "",
    stock: "",
    rating: false,
    delivery: "",
    productTags: [],
    price_range: null,
  },
};

// usereducer finctions
const AllProductsReduceFun = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "initialAllProducts":
      return {
        ...state,
        initialAllProducts: payload,
        loading: false,
      };
    case "SEARCH_RESULTS":
      return {
        ...state,
        searchResult:
          state.initialAllProducts.filter((ele) =>
            ele.tag.toString().toLowerCase().includes(payload.toString().toLowerCase())
            ||  ele.name.toString().toLowerCase().includes(payload.toString().toLowerCase())
          ),
        loading: false,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searchResult:[]
      }
    default:
      return state;
  }
};

export const AllProductsContextFun = ({ children }) => {
  const [state, dispatch] = useReducer(
    AllProductsReduceFun,
    initialStateOfAllProducts
  );

  return (
    <allProductsContext.Provider
      value={{ state, allProductsDispatch: dispatch }}
    >
      {children}
    </allProductsContext.Provider>
  );
};

// function to use context
export const useAllProductsContextContext = () => {
  return useContext(allProductsContext);
};
