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
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishListItems:[...state.wishListItems,payload]
            }
        case "REMOVE_FROM_WISHLIST":
        
            return {
                ...state,
                wishListItems:state.wishListItems.filter((ele)=>ele._id!=payload._id)
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


