import { createContext, useContext, useEffect, useReducer } from "react";
export const wishListContextProvider = createContext()
const initialState= {
    wishListItems:  [],
    loading:false
}

 const wishListContextReducerFun = (state, { type, payload }) => {
    switch (type) {
        case "LOAD_WISHLIST":
            return {
                ...state,
                wishListItems:payload
            }
            case "CLEAR_WISHLIST":
                return {
                  ...state,
                  wishListItems:[]
                }
        default:
          return state
    }
}

export const WishListContextFun = ({ children }) => {
    const [state, dispatch] = useReducer(wishListContextReducerFun, initialState)
    


    return (
        <wishListContextProvider.Provider value={{ state, wishListContextDispatch:dispatch}}>
            {children}
            </wishListContextProvider.Provider>
    )
}
export const useWishListContextProvider = () =>  useContext(wishListContextProvider)


