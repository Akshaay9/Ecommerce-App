import { createContext, useContext, useReducer } from "react";
import { cartContextReducerFun } from "./CartContextReducer";
import { v4 as uuidv4 } from "uuid";

export const cartContextProvider = createContext();

const initialStateOfCart = {
  cartItems: localStorage.getItem("cart-itmes")
    ? JSON.parse(localStorage.getItem("cart-items"))
    : [],
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
