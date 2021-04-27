import React, { useState } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { NavLink } from "react-router-dom";
import emptyWISHLISTimage from "../../Assets/wish.svg";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import {
  addToCartHandlerBasedOnLogin,
  manageQTY,
  deleteItem,
} from "../../UtilityFunctions/ProductListUtilityFuntion/CartApiCalls";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";
import { removeFromWishList } from "../../UtilityFunctions/ProductListUtilityFuntion/WishListAPICalls";
import { useToastContext } from "../../Contexts/ToastContext/ToastContext";
import {
  checkIfTheProductIsWished,
  dispatchBasedOnBroductWishedOrNot,
} from "../../UtilityFunctions/ProductListUtilityFuntion/ProductListingFunctionsUtility";

function WishLists() {
  const {
    state: { wishListItems },
    wishListContextDispatch,
  } = useWishListContextProvider();
  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();
  const {
    state: { userInfo },
  } = useLoginContext();
  const { toastDispatch } = useToastContext();
  const [loader, setLoader] = useState(false);
  const [ButtonId, setButtonId] = useState(null);

  // check if the items present in cart
  const checkIfTheProductIsInCart = (product, index) => {
    const newItems = [...cartItems];
    const isItemOnTheCart = newItems.filter(
      (ele) => ele.productID._id == product.productID._id
    );
    
    if (isItemOnTheCart.length > 0) {
      return (
        <div className="card-add-to-cart">
          {" "}
          <h3 style={{ textAlign: "center" }}>
            {isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock ? (
              <span style={{ color: "red" }}>Out Of Stock</span>
            ) : (
              "Quick Add"
            )}
          </h3>{" "}
          <div>
            {" "}
            <button
              className="btn-secondary btn-secondary-hr-outline-in wishlist-cta  secondary-disabled"
              id={index}
              disabled={loader && index * 1 + 200 == ButtonId}
              onClick={(e) => {
                setButtonId(e.target.id * 1 + 200);
                isItemOnTheCart[0].inCartQty == 1
                  ? deleteItem(
                      product.productID._id,
                      userInfo,
                      cartContextDispatch,
                      "LOAD_CART_ITEMS",
                      toastDispatch,
                      "Product removed from cart",
                      setLoader
                    )
                  : manageQTY(
                      product.productID._id,
                      userInfo,
                      cartContextDispatch,
                      "LOAD_CART_ITEMS",
                      {
                        inCartQty: isItemOnTheCart[0].inCartQty - 1,
                      },
                      toastDispatch,
                      "Product quantity decreased",
                      setLoader
                    );
              }}
            >
              {loader && ButtonId !== null && index + 200 == ButtonId ? (
                <i class="fas fa-spinner fa-spin btn-spin"></i>
              ) : (
                "-"
              )}
            </button>{" "}
            {isItemOnTheCart[0].inCartQty}{" "}
            <button
              disabled={
                isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock
              }
              className="btn-secondary btn-secondary-hr-outline-in  wishlist-cta secondary-disabled"
              id={index}
              onClick={(e) => {
                setButtonId(e.target.id);
                manageQTY(
                  product.productID._id,
                  userInfo,
                  cartContextDispatch,
                  "LOAD_CART_ITEMS",
                  {
                    inCartQty: isItemOnTheCart[0].inCartQty + 1,
                  },
                  toastDispatch,
                  "Product quantity increased",
                  setLoader
                );
              }}
            >
              {loader && ButtonId !== null && index == ButtonId ? (
                <i class="fas fa-spinner fa-spin btn-spin"></i>
              ) : (
                "+"
              )}
            </button>{" "}
          </div>{" "}
        </div>
      );
    } else
      return (
        <div className="card-add-to-cart singleProductPage">
          <button
            id={index}
            className="btn-primary btn-primary-hr-outline-out singleproductpage-cta blue-btn-disable"
            disabled={loader && index * 1 == ButtonId}
            onClick={(e) => {
              setButtonId(e.target.id);
              addToCartHandlerBasedOnLogin(
                product.productID._id,
                userInfo,
                null,
                cartContextDispatch,
                "LOAD_CART_ITEMS",
                toastDispatch,
                "Product added to Cart",
                setLoader
              );
            }}
          >
            {loader && ButtonId !== null && index == ButtonId ? (
              <i class="fas fa-spinner fa-spin login-spin"></i>
            ) : (
              "Add To Cart"
            )}
          </button>
        </div>
      );
  };
  return (
    <div>
      <div className="wishList-heading">Your WishList</div>
      {wishListItems.length == 0 && (
        <img className="emptyWishIMG" src={emptyWISHLISTimage} alt="" />
      )}
      <div className="wishList-components">
        {wishListItems.length > 0 &&
          wishListItems.map((ele, index) => (
            <div className="wishlist-component-container">
              <NavLink to={`/products/${ele.productID._id}`}>
                <div className="wishlist-component-container-left">
                  <div className="cart-component-left-img">
                    <img src={ele.productID.images[0].img} alt="" />
                  </div>
                  <div className="wishlist-component-container-left-desc">
                    <h2>{ele.productID.name}</h2>
                    <h4>{ele.productID.price}.00₹</h4>
                    <p>{ele.productID.desc.slice(0, 200)}....</p>
                  </div>
                </div>
              </NavLink>
              <div className="wishlist-component-container-right">
                <i
                  className="wishID-icon"
                  onClick={(e) => {
                    setButtonId(e.target.id * 1);
                    dispatchBasedOnBroductWishedOrNot(
                      ele.productID,
                      wishListItems,
                      wishListContextDispatch,
                      toastDispatch,
                      null,
                      userInfo,
                      setLoader
                    );
                  }}
                >
                  {loader &&
                  ButtonId !== null &&
                  index * 1 + 300 == ButtonId ? (
                    <i class="fas fa-spinner fa-spin wish-spin"></i>
                  ) : (
                    <i
                      className="fas fa-trash "
                      id={index * 1 + 300}
                    ></i>
                  )}
                </i>
                {checkIfTheProductIsInCart(ele, index)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WishLists;
