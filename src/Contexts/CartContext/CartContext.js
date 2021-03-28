import { createContext, useContext, useReducer } from "react";
import { cartContextReducerFun } from "./CartContextReducer";
import { useEffect } from "react"


export const cartContextProvider = createContext();
const initialStateOfCart = {
  cartItems: localStorage.getItem("cart-items")
    ? JSON.parse(localStorage.getItem("cart-items"))
    : [],
  loading: false,
};



export const CartContextFunction = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartContextReducerFun,
    initialStateOfCart
  );

  useEffect(() => {
    localStorage.setItem("cart-items",JSON.stringify(state.cartItems))
  },[state.cartItems])

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
