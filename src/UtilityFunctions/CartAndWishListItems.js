import { makeAnAPICall } from "../APiCalls";

export const loadCart = async(cartContextDispatch,userInfo) => {
    await makeAnAPICall(`GET`,`https://stark-falls-25364.herokuapp.com/api/cart`,cartContextDispatch,"LOAD_CART_ITEMS",null,userInfo.token)  
}
export const WishListItems = async(wishListContextDispatch,userInfo) => {
    await makeAnAPICall(`GET`,`https://stark-falls-25364.herokuapp.com/api/wishlist`,wishListContextDispatch,"LOAD_WISHLIST",null,userInfo.token)    
}
