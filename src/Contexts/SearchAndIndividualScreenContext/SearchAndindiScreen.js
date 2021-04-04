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
            ele.tag.toLowerCase().includes(payload.toLowerCase())
          ) ||
          state.initialAllProducts.filter((ele) =>
            ele.name.toLowerCase().includes(payload.toLowerCase())
          ),
        loading: false,
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          sort: "lowToHigh",
        },
        loading: false,
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          sort: "HighToLow",
        },
        loading: false,
      };
    case "IN_STOCK":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          stock: "in",
        },
        loading: false,
      };
    case "OUT_OF_STOCK":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          stock: "out",
        },
        loading: false,
      };
    case "RATING":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          rating: payload,
        },
        loading: false,
      };
    case "FREE_DELIVERY":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          delivery: "free",
        },
        loading: false,
      };
    case "EXPRESS_DELIVERY":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          delivery: "express",
        },
        loading: false,
      };

    case "FILTER_BY_PRODUCT_TAGS":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          productTags: payload,
        },
        loading: false,
      };
    case "PRICE_RANGE":
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          price_range: payload,
        },
        loading: false,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        loading: true,
        filterItems: {
          sort: "",
          stock: "",
          rating: false,
          deliver: "",
          productTags: [],
          price_range: null,
        },
      };

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
