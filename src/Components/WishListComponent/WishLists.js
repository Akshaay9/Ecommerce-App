import React from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";

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
    const isItemOnTheCart = newItems.filter((ele) => ele.id == product.id);
    if (isItemOnTheCart.length > 0) {
      return (
        <div className="card-add-to-cart">
          {" "}
          <h3 style={{textAlign:"center"}} >
            {isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock ? (
              <span style={{color:"red"}}>Out Of Stock</span>
           
            ) : (
              "Quick Add"
            )}
          </h3>{" "}
          <div >
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
      <div className="wishList-components">
        {wishListItems.map((ele) => (
          <div className="wishlist-component-container">
            <div className="wishlist-component-container-left">
              <div className="cart-component-left-img">
                <img src={ele.images[0].img} alt="" />
              </div>
              <div className="wishlist-component-container-left-desc">
                <h2>{ele.name}</h2>
                <h4>{ele.price}.00₹</h4>
                <p>{ele.desc}</p>
              </div>
            </div>
            <div className="wishlist-component-container-right">
              <i
                class="fas fa-trash"
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
