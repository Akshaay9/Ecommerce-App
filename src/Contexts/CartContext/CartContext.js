import { createContext, useContext, useReducer } from "react";
import { cartContextReducerFun } from "./CartContextReducer";

export const cartContextProvider = createContext()

const initialStateOfCart = {
    cartItems: localStorage.getItem("cart-itmes") ? JSON.parse(localStorage.getItem("cart-items")) : [],
    loading:false   
}

export const CartContextFunction = ({ children }) => {
    const [state, dispatch] = useReducer(cartContextReducerFun,initialStateOfCart)

    return (
        <cartContextProvider.Provider value={{state,cartContextDispatch:dispatch}}>
            {children}
        </cartContextProvider.Provider>
    )
}
export const useCartContextProvider = () => {
    return useContext(cartContextProvider)
}