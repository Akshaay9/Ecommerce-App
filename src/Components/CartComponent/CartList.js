import React from "react";
import "./App.css";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
function CartList() {
  const {
    state: { cartItems, loading },
  } = useCartContextProvider();
  return (
    <div className="cart-component">
      {cartItems.map((ele) => (
        <div className="cart-componrnt-container">
          <div className="cart-component-left">
            <div className="cart-component-left-img">
              <img src={ele.images[0].img1} alt="" />
            </div>
            <div className="cart component-left-desc">
              <h2>{ele.name}</h2>
              <h4>{ele.price}.00₹</h4>
            </div>
          </div>
          <div className="cart-component-mid">
            <div className="card-add-to-cart-action">
              <div className="card-ad-to-cart-action-qty">
                <button className="btn-secondary btn-secondary-hr-outline-in">
                  <span>-</span>
                </button>
                <button className="btn-secondary btn-secondary-hr-outline-in secondary-disabled">
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
          <div className="cart-component-right">
            <h4>{ele.price}.00₹</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartList;
