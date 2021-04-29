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
import LoginModal from "../LoginModal/LoginModal";
import MobileSkeletonLoader from "../../Skeleton-loader/ProductListingLoaderMobile";
import AmazonLoader from "../../Skeleton-loader/SingleProductView";

function SingleProductView() {
  const { id } = useParams();
  const [signleProduct, setSingleProduct] = useState([]);
  const [imageSlider, setImageSlider] = useState(0);
  const [showModal, setSHowModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ButtonId, setButtonId] = useState(null);

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
      setLoading(true);
      const singleProduct = await makeAnAPICall(
        "GET",
        `https://stark-falls-25364.herokuapp.com/api/products/${id}`
      );
      setSingleProduct([singleProduct.data]);
      setLoading(false);
    })();
  }, []);

  // carousal
  useEffect(() => {
    const next = (imageSlider + 1) % 3;
    const id = setTimeout(() => setImageSlider(next), 1400);
    return () => clearTimeout(id);
  }, [imageSlider]);

  // check if the items present in cart
  const checkIfTheProductIsInCart = (product, index) => {
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
              className="btn-secondary btn-secondary-hr-outline-in single-cta "
              id={index + 2}
              onClick={(e) => {
                setButtonId(e.target.id);
                isItemOnTheCart[0].inCartQty == 1
                  ? deleteItem(
                      product._id,
                      userInfo,
                      cartContextDispatch,
                      "LOAD_CART_ITEMS",
                      toastDispatch,
                      "Product removed from cart",
                      setLoader
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
                      "Product quantity decreased",
                      setLoader
                    );
              }}
            >
              {loader && ButtonId !== null && index + 2 == ButtonId ? (
                <i class="fas fa-spinner fa-spin btn-spin"></i>
              ) : (
                "-"
              )}
            </button>{" "}
            <p style={{ width: ".2rem" }}>{isItemOnTheCart[0].inCartQty} </p>
            <button
              disabled={
                isItemOnTheCart[0].inCartQty === signleProduct[0].inStock ||
                (loader && index * 1 + 1 == ButtonId)
              }
              className="btn-secondary btn-secondary-hr-outline-in secondary-disabled single-cta "
              id={index + 1}
              onClick={(e) => {
                setButtonId(e.target.id);
                manageQTY(
                  product._id,
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
              {loader && ButtonId !== null && index + 1 == ButtonId ? (
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
            className="btn-primary btn-primary-hr-outline-out singleproductpage-cta"
            id={index}
            disabled={loader && index * 1 == ButtonId}
            onClick={(e) => {
              setButtonId(e.target.id);
              addToCartHandlerBasedOnLogin(
                product._id,
                userInfo,
                setSHowModal,
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
  // wishlist check
  const checkIfTheProductIsWished = (ele, index) => {
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
  const dispatchBasedOnBroductWishedOrNot = (ele, index) => {
    const isItemsWished = wishListItems.filter(
      (prod) => prod.productID._id == ele._id
    );
    if (isItemsWished.length == 0) {
      setButtonId(index);
      addToWishHandlerBasedOnLogin(
        ele._id,
        userInfo,
        setSHowModal,
        wishListContextDispatch,
        "LOAD_WISHLIST",
        toastDispatch,
        "Product added to wishlist",
        setLoader
      );
    } else {
      setButtonId(index);
      removeFromWishList(
        ele._id,
        userInfo,
        wishListContextDispatch,
        "LOAD_WISHLIST",
        toastDispatch,
        "Product removed from wishlist",
        setLoader
      );
    }
  };
  // main functon
  return (
    <>
      {loading && (
        <>
          <div className="desktop-skeleton-loader load">{<AmazonLoader />}</div>
          <div className="mobile-skeleton-loader">
            {<MobileSkeletonLoader />}
          </div>
        </>
      )}
      {showModal && (
        <LoginModal showModal={showModal} setSHowModal={setSHowModal} />
      )}
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

                {checkIfTheProductIsInCart(signleProduct[0], 5)}
                <button
                  disabled={loader && ButtonId == 300}
                  className="btn-secondary btn-secondary-hr-outline-in singleproductpage secondary-disabled "
                  id={400}
                  onClick={() =>
                    dispatchBasedOnBroductWishedOrNot(signleProduct[0], 300)
                  }
                >
                  {loader && ButtonId !== null && 300 == ButtonId ? (
                    <i class="fas fa-spinner fa-spin"></i>
                  ) : (
                    checkIfTheProductIsWished(signleProduct[0], 300)
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProductView;
