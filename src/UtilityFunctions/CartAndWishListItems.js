import { makeAnAPICall } from "../APiCalls";
import { BE_URL } from "../const";

export const loadCart = async (cartContextDispatch, userInfo) => {
  await makeAnAPICall(
    `GET`,
    `${BE_URL}/api/cart`,
    cartContextDispatch,
    "LOAD_CART_ITEMS",
    null,
    userInfo.token
  );
};
export const WishListItems = async (wishListContextDispatch, userInfo) => {
  await makeAnAPICall(
    `GET`,
    `${BE_URL}/api/wishlist`,
    wishListContextDispatch,
    "LOAD_WISHLIST",
    null,
    userInfo.token
  );
};
