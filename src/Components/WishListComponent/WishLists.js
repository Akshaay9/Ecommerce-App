import React from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { NavLink } from "react-router-dom";
import emptyWISHLISTimage from "../../Assets/wish.svg";

function WishLists() {
  const {
    state: { wishListItems },
    wishListContextDispatch,
  } = useWishListContextProvider();
  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();

  // check if the items present in cart
  const checkIfTheProductIsInCart = (product) => {
    const newItems = [...cartItems];
    const isItemOnTheCart = newItems.filter((ele) => ele._id == product._id);
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
              className="btn-secondary btn-secondary-hr-outline-in wishlist-cta"
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
              className="btn-secondary btn-secondary-hr-outline-in  wishlist-cta"
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
  return (
    <div>
      <div className="wishList-heading">Your WishList</div>
      {wishListItems.length == 0 && (
        <img className="emptyWishIMG" src={emptyWISHLISTimage} alt="" />
      )}
      <div className="wishList-components">
        {wishListItems.length > 0 &&
          wishListItems.map((ele) => (
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
                  className="fas fa-trash"
                  onClick={() =>
                    wishListContextDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: ele,
                    })
                  }
                ></i>
                {checkIfTheProductIsInCart(ele)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WishLists;
