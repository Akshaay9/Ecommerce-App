import { createContext, useContext, useEffect, useReducer } from "react";
export const wishListContextProvider = createContext()
const initialState= {
    wishListItems: localStorage.getItem("wishList-items") ?
        JSON.parse(localStorage.getItem("wishList-items")) : [],
    loading:false
}

 const wishListContextReducerFun = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishListItems:[...state.wishListItems,payload]
            }
        case "REMOVE_FROM_WISHLIST":
        
            return {
                ...state,
                wishListItems:state.wishListItems.filter((ele)=>ele.id!=payload.id)
            }
        default:
          return state
    }
}

export const WishListContextFun = ({ children }) => {
    const [state, dispatch] = useReducer(wishListContextReducerFun, initialState)
    
    useEffect(() => {
        localStorage.setItem("wishList-items", JSON.stringify(state.wishListItems))
        console.log(localStorage.getItem("wishList-items"));
      },[state.wishListItems])

    return (
        <wishListContextProvider.Provider value={{ state, wishListContextDispatch:dispatch}}>
            {children}
            </wishListContextProvider.Provider>
    )
}
export const useWishListContextProvider = () =>  useContext(wishListContextProvider)


