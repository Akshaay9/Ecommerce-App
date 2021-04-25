import React, { useState, useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { useParams } from "react-router-dom";
import { useAllProductsContextContext } from "../../Contexts/SearchAndIndividualScreenContext/SearchAndindiScreen";
import axios from "axios";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";
import { useToastContext } from "../../Contexts/ToastContext/ToastContext";
import {
  addToCartHandlerBasedOnLogin,
  deleteItem,
  manageQTY,
} from "../../UtilityFunctions/ProductListUtilityFuntion/CartApiCalls";
import {
  addToWishHandlerBasedOnLogin,
  removeFromWishList,
} from "../../UtilityFunctions/ProductListUtilityFuntion/WishListAPICalls";
const todaysDate = new Date();

function SingleProductView() {
  const { id } = useParams();
  const [signleProduct, setSingleProduct] = useState([]);
  const [imageSlider, setImageSlider] = useState(0);

  const {
    state: { userInfo },
  } = useLoginContext();

  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();

  const {
    state: { wishListItems },
    wishListContextDispatch,
  } = useWishListContextProvider();

  const { toastDispatch } = useToastContext();

  useEffect(() => {
    (async () => {
      const singleProduct = await makeAnAPICall(
        "GET",
        `https://stark-falls-25364.herokuapp.com/api/products/${id}`
      );
      setSingleProduct([singleProduct.data]);
    })();
  }, []);

  console.log("signleProducts", signleProduct);

  // carousal
  useEffect(() => {
    const next = (imageSlider + 1) % 3;
    const id = setTimeout(() => setImageSlider(next), 1400);
    return () => clearTimeout(id);
  }, [imageSlider]);

  // check if the items present in cart
  const checkIfTheProductIsInCart = (product) => {
    const newItems = [...cartItems];
    const isItemOnTheCart = newItems.filter(
      (ele) => ele.productID._id == product._id
    );
    if (isItemOnTheCart.length > 0) {
      return (
        <div className="card-add-to-cart">
          {" "}
          <h3 style={{ textAlign: "center" }}>
            {isItemOnTheCart[0].inCartQty === signleProduct[0].inStock ? (
              <span style={{ color: "red" }}>Out Of Stock</span>
            ) : (
              "Quick Add"
            )}
          </h3>{" "}
          <div className="card-ad-to-cart-action-qty">
            {" "}
            <button
              className="btn-secondary btn-secondary-hr-outline-in single-cta"
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
                      },
                      toastDispatch,
                      "Product quantity decreased"
                    )
              }
            >
              <span>-</span>
            </button>{" "}
            {isItemOnTheCart[0].inCartQty}{" "}
            <button
              disabled={
                isItemOnTheCart[0].inCartQty === signleProduct[0].inStock
              }
              className="btn-secondary btn-secondary-hr-outline-in secondary-disabled single-cta"
              onClick={() =>
                manageQTY(
                  product._id,
                  userInfo,
                  cartContextDispatch,
                  "LOAD_CART_ITEMS",
                  {
                    inCartQty: isItemOnTheCart[0].inCartQty + 1,
                  },
                  toastDispatch,
                  "Product quantity increased"
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
        <div className="card-add-to-cart singleProductPage">
          <button
            className="btn-primary btn-primary-hr-outline-out singleproductpage-cta"
            onClick={() =>
              addToCartHandlerBasedOnLogin(
                product._id,
                userInfo,
                null,
                cartContextDispatch,
                "LOAD_CART_ITEMS",
                toastDispatch,
                "Product added to Cart"
              )
            }
          >
            Add To Cart
          </button>
        </div>
      );
  };
  // wishlist check
  const checkIfTheProductIsWished = (ele) => {
    const isItemsWished = wishListItems.filter(
      (prod) => prod.productID._id == ele._id
    );
    if (isItemsWished.length > 0) {
      return "Remove From WishList";
    } else {
      return "Add to WishList";
    }
  };
  // dispatching wishlist
  const dispatchBasedOnBroductWishedOrNot = (ele) => {
    const isItemsWished = wishListItems.filter(
      (prod) => prod.productID._id == ele._id
    );
    if (isItemsWished.length == 0) {
      addToWishHandlerBasedOnLogin(
        ele._id,
        userInfo,
        null,
        wishListContextDispatch,
        "LOAD_WISHLIST",
        toastDispatch,
        "Product added to wishlist"
      );
    } else {
      removeFromWishList(
        ele._id,
        userInfo,
        wishListContextDispatch,
        "LOAD_WISHLIST",
        toastDispatch,
        "Product removed from wishlist"
      );
    }
  };
  // main functon
  return (
    <div className="single-product-viewer">
      <div className="single-product-viewer">
        {signleProduct.length > 0 && (
          <div className="single-product-viewer-container">
            <div className="single-product-viewer-container-left">
              <div className="single-product-viewer-images">
                <img src={signleProduct[0].images[imageSlider].img} alt="" />
                <i
                  className="fas fa-chevron-right"
                  onClick={() => {
                    if (imageSlider == 2) {
                      setImageSlider(0);
                    } else {
                      setImageSlider(imageSlider + 1);
                    }
                  }}
                ></i>
                <i
                  className="fas fa-chevron-left"
                  onClick={() => {
                    if (imageSlider == 0) {
                      setImageSlider(2);
                    } else {
                      setImageSlider(imageSlider - 1);
                    }
                  }}
                ></i>
              </div>
            </div>
            <div className="single-product-viewer-container-right">
              <div className="single-product-desc">
                <span>New</span>
                <div className="single-prod-desc-row-one">
                  <div className="single-prod-desc-row-one">
                    <h1> {signleProduct[0].name}</h1>
                  </div>

                  <div className="single-prod-desc-row-two">
                    <h2>{signleProduct[0].price}.00₹</h2>
                  </div>
                </div>
                <div className="rating bg-blue">
                  <h3>{signleProduct[0].rating}</h3>
                </div>
                <div className="single-product-desc-img-container">
                  {signleProduct[0].images.map((ele) => (
                    <div className="single-product-desc-img">
                      <img src={ele.img} alt="" />
                    </div>
                  ))}
                </div>
                <div className="single-product-description">
                  <p>{signleProduct[0].desc}</p>
                </div>
              </div>

              {checkIfTheProductIsInCart(signleProduct[0])}
              <button
                className="btn-secondary btn-secondary-hr-outline-in singleproductpage"
                onClick={() =>
                  dispatchBasedOnBroductWishedOrNot(signleProduct[0])
                }
              >
                {checkIfTheProductIsWished(signleProduct[0])}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProductView;
