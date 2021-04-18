import { setAlert } from "../../Contexts/ToastContext/ToastAction"


const removeFromCart = (cartContextDispatch,product,toastDispatch) => {
  cartContextDispatch({
    type: "REMOVE_FROM_CART",
    payload: product,
  })
  setAlert("Product has removed from the cart","danger",toastDispatch)
}

export const  checkIfTheProductIsInCart = (product,cartItems,cartContextDispatch,toastDispatch) => {
  const newItems = [...cartItems];
    const isItemOnTheCart = newItems.filter((ele) => ele.id == product.id);
    if (isItemOnTheCart.length > 0) {
      return (
        <div className="card-add-to-cart-action">
          {" "}
          <h3>
            {isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock ? (
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
                   ?
                  removeFromCart(cartContextDispatch,product,toastDispatch)
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
              className="btn-secondary btn-secondary-hr-outline-in secondary-disabled"
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
        <div className="card-add-to-cart-action">
          <h3>Quick ADD</h3>
          <button
            className="btn-primary btn-primary-hr-outline-out"
            onClick={() =>
            { cartContextDispatch({ type: "ADD_TO_CART", payload: product });setAlert("Product has been Added to cart","success",toastDispatch)}}
          >
            Add To Cart
          </button>
        </div>
      );
};
  
export const checkIfTheProductIsWished = (ele,wishListItems) => {
    const isItemsWished = wishListItems.filter((prod) => prod.id == ele.id);
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

  export   const dispatchBasedOnBroductWishedOrNot = (ele,wishListItems,wishListContextDispatch) => {
    const isItemsWished = wishListItems.filter((prod) => prod.id == ele.id);
    if (isItemsWished.length == 0) {
      wishListContextDispatch({ type: "ADD_TO_WISHLIST", payload: ele });
    } else {
      wishListContextDispatch({ type: "REMOVE_FROM_WISHLIST", payload: ele });
    }
  };