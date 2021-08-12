import { createContext, useContext, useReducer } from "react";
import { cartContextReducerFun } from "./CartContextReducer";
import { useEffect } from "react"


export const cartContextProvider = createContext();
const initialStateOfCart = {
  cartItems:[],
  loading: false,
};

export const CartContextFunction = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartContextReducerFun,
    initialStateOfCart
  );


  return (
    <cartContextProvider.Provider
      value={{ state, cartContextDispatch: dispatch }}
    >
      {children}
    </cartContextProvider.Provider>
  );
};
export const useCartContextProvider = () => {
  return useContext(cartContextProvider);
};
