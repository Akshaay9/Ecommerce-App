import axios from "axios";
import LoginModal from "../../Components/LoginModal/LoginModal";
import { setAlert } from "../../Contexts/ToastContext/ToastAction";
import { makeAnAPICall } from "./APiCalls";
import {
  addToCartHandlerBasedOnLogin,
  deleteItem,
  manageQTY,
} from "./CartApiCalls";
import { addToWishHandlerBasedOnLogin, removeFromWishList } from "./WishListAPICalls";

// const removeFromCart = (cartContextDispatch,product,toastDispatch) => {
//   cartContextDispatch({
//     type: "REMOVE_FROM_CART",
//     payload: product,
//   })
//   setAlert("Product has removed from the cart","danger",toastDispatch)
// }
const token = JSON.parse(localStorage.getItem("user_info"));

export const checkIfTheProductIsInCart = (
  product,
  cartItems,
  cartContextDispatch,
  toastDispatch,
  showModal,
  setSHowModal,

  userInfo
) => {
  // add to wishList based on login

  const newItems = [...cartItems];
  const isItemOnTheCart = newItems.filter(
    (ele) => ele.productID._id == product._id
  );

  if (isItemOnTheCart.length > 0) {
    return (
      <div className="card-add-to-cart-action">
        {" "}
        <h3>
          {isItemOnTheCart[0].inCartQty ===
          isItemOnTheCart[0].productID.inStock ? (
            <span style={{ color: "red" }}>Out Of Stock</span>
          ) : (
            "Quick Add"
          )}
        </h3>{" "}
        <div className="card-ad-to-cart-action-qty">
          {" "}
          <button
            className="btn-secondary btn-secondary-hr-outline-in"
            onClick={() =>
              isItemOnTheCart[0].inCartQty == 1
                ? deleteItem(
                    product._id,
                    userInfo,
                    cartContextDispatch,
                    "LOAD_CART_ITEMS"
                  )
                : manageQTY(
                    product._id,
                    userInfo,
                    cartContextDispatch,
                    "LOAD_CART_ITEMS",
                    {
                      inCartQty: isItemOnTheCart[0].inCartQty - 1,
                    }
                  )
            }
          >
            <span>-</span>
          </button>{" "}
          {isItemOnTheCart[0].inCartQty}{" "}
          <button
            disabled={
              isItemOnTheCart[0].inCartQty ===
              isItemOnTheCart[0].productID.inStock
            }
            className="btn-secondary btn-secondary-hr-outline-in secondary-disabled"
            onClick={() =>
              manageQTY(
                product._id,
                userInfo,
                cartContextDispatch,
                "LOAD_CART_ITEMS",
                {
                  inCartQty: isItemOnTheCart[0].inCartQty + 1,
                }
              )
            }
          >
            <span>+</span>
          </button>{" "}
        </div>{" "}
      </div>
    );
  } else
    return (
      <div className="card-add-to-cart-action">
        <h3>Quick ADD</h3>
        <button
          className="btn-primary btn-primary-hr-outline-out"
          onClick={() =>
            addToCartHandlerBasedOnLogin(
              product._id,
              userInfo,
              setSHowModal,
              cartContextDispatch,
              "LOAD_CART_ITEMS",
              null
            )
          }
        >
          Add To Cart
        </button>
      </div>
    );
};

export const checkIfTheProductIsWished = (ele, wishListItems) => {
  const isItemsWished = wishListItems.filter(
    (prod) => prod.productID._id == ele._id
  );
  let heartColor;
  if (isItemsWished.length > 0) {
    return (heartColor = {
      color: "red",
    });
  } else {
    return (heartColor = {
      color: " rgb(172, 161, 161)",
    });
  }
};

export const dispatchBasedOnBroductWishedOrNot = async (
  ele,
  wishListItems,
  wishListContextDispatch,
  setSHowModal,
  userInfo
) => {
  const isItemsWished = wishListItems.filter(
    (prod) => prod.productID._id == ele._id
  );
  if (isItemsWished.length == 0) {
    addToWishHandlerBasedOnLogin(
      ele._id,
      userInfo,
      setSHowModal,
      wishListContextDispatch,
      "LOAD_WISHLIST"
    );
  } else {
    await removeFromWishList(
      ele._id,
      userInfo,
      wishListContextDispatch,
      "LOAD_WISHLIST"
    );
  }
};
