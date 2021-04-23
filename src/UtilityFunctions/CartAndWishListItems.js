import { makeAnAPICall } from "./ProductListUtilityFuntion/APiCalls"

export const loadCart = async(cartContextDispatch,userInfo) => {
    await makeAnAPICall(`GET`,`http://localhost:5000/api/cart`,cartContextDispatch,"LOAD_CART_ITEMS",null,userInfo.token)  
}
export const WishListItems = async(wishListContextDispatch,userInfo) => {
 
    await makeAnAPICall(`GET`,`http://localhost:5000/api/wishlist`,wishListContextDispatch,"LOAD_WISHLIST",null,userInfo.token)    
}
