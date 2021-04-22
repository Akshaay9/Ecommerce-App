import React, { useState, useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { useParams } from "react-router-dom";
import { useAllProductsContextContext } from "../../Contexts/SearchAndIndividualScreenContext/SearchAndindiScreen";
import axios from "axios";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
const todaysDate = new Date();

function SingleProductView() {
  const { id } = useParams();
  const [signleProduct, setSingleProduct] = useState([])
  const [imageSlider, setImageSlider] = useState(0);
  
 
 

  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();

  const {
    state: { wishListItems },
    wishListContextDispatch,
  } = useWishListContextProvider();
 

  useEffect(() => {
   
    (async () => {
      const singleProduct = await makeAnAPICall("GET", `https://stark-falls-25364.herokuapp.com/api/products/${id}`)
      setSingleProduct([singleProduct.data]);
    })()

  },[]);

  console.log(signleProduct);

  //   carousal
  useEffect(() => {
    const next = (imageSlider + 1) % 3;
    const id = setTimeout(() => setImageSlider(next), 1400);
    return () => clearTimeout(id);
  }, [imageSlider]);

  // check if the items present in cart
  const checkIfTheProductIsInCart = (product) => {
    const newItems = [...cartItems];
    const isItemOnTheCart = newItems.filter((ele) => ele.id == product.id);
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
          <div className="card-ad-to-cart-action-qty">
            {" "}
            <button
              className="btn-secondary btn-secondary-hr-outline-in single-cta"
              onClick={() =>
                isItemOnTheCart[0].inCartQty == 1
                  ? cartContextDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product,
                    })
                  : cartContextDispatch({
                      type: "DECREASE_QTY",
                      payload: product,
                    })
              }
            >
              <span>-</span>
            </button>{" "}
            {isItemOnTheCart[0].inCartQty}{" "}
            <button
              disabled={
                isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock
              }
              className="btn-secondary btn-secondary-hr-outline-in secondary-disabled single-cta"
              onClick={() =>
                cartContextDispatch({ type: "INCREASE_QTY", payload: product })
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
              cartContextDispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            Add To Cart
          </button>
        </div>
      );
  };
  // wishlist check
  const checkIfTheProductIsWished = (ele) => {
    const isItemsWished = wishListItems.filter((prod) => prod.id == ele.id);
    if (isItemsWished.length > 0) {
      return "Remove From WishList";
    } else {
      return "Add to WishList";
    }
  };
  // dispatching wishlist
  const dispatchBasedOnBroductWishedOrNot = (ele) => {
    const isItemsWished = wishListItems.filter((prod) => prod.id == ele.id);
    if (isItemsWished.length == 0) {
      wishListContextDispatch({ type: "ADD_TO_WISHLIST", payload: ele });
    } else {
      wishListContextDispatch({ type: "REMOVE_FROM_WISHLIST", payload: ele });
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
                  class="fas fa-chevron-right"
                  onClick={() => {
                    if (imageSlider == 2) {
                      setImageSlider(0);
                    } else {
                      setImageSlider(imageSlider + 1);
                    }
                  }}
                ></i>
                <i
                  class="fas fa-chevron-left"
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
                  <h3>{ signleProduct[0].rating}</h3>
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
