import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import CHeckOutNav from "./CheckOutNav";
import StripeButton from "./StripeButton";
import SpinnerSVG from "../../Assets/Spinner.svg";

function FinalCheckOut() {
  let navigate = useNavigate();
  const {
    state: { cartItems },
  } = useCartContextProvider();
  const localStoragePaymentInfo = localStorage.getItem("payment")
    ? JSON.parse(localStorage.getItem("payment"))
    : {};
  const localStorageaddress = localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : {};
  const [loader, setLoader] = useState(false);

  if (cartItems.length == 0) {
    navigate("/profile")
  }

  return (
    <div className="final-payment-container ">
      {loader && (
        <div className="spinner">
          <img src={SpinnerSVG} alt="" />
        </div>
      )}
      <div style={{ marginBottom: "1rem" }}>
        <CHeckOutNav step2 step3 step4 />
        <div className="shipping-final">
          <div className="shipping-heading right-shopping-final">
            <h2>Your Products</h2>
            <p>Payment Method : {localStoragePaymentInfo.payment}</p>
            <p>Address : {localStorageaddress.address}...</p>
            <div className="wishList-components final-cart-items-ship-container">
              {cartItems.length > 0 &&
                cartItems.map((ele) => (
                  <div className="wishlist-component-container final-cart-items-ship">
                    <NavLink to={`/products/${ele.productID._id}`}>
                      <div className="wishlist-component-container-left final-cart-items-ship-left">
                        <div className="cart-component-left-img final-cart-items-ship-left-img">
                          <img src={ele.productID.images[0].img} alt="" />
                        </div>
                        <div className="wishlist-component-container-left-desc">
                          <h2>{ele.productID.name}</h2>
                          <h4>
                            {ele.productID.price}.00₹ X {ele.inCartQty}
                          </h4>
                          <p>{ele.productID.desc.slice(0, 200)}....</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
            </div>
          </div>

          <div className="shipping-heading left-shopping-final">
            <h2>Order Summary</h2>
            <p>
              Total Quantity:{" "}
              {cartItems.reduce((acc, ele) => acc + ele.inCartQty, 0)}
            </p>
            <p>Shipping Price: 0.00</p>
            <p>
              Total Price :{" "}
              {cartItems.reduce(
                (acc, ele) => acc + ele.inCartQty * (ele.productID.price * 1),
                0
              )}
              .00₹
            </p>

            <StripeButton
              setLoader={setLoader}
              cartItems={cartItems}
              totalAmount={cartItems.reduce(
                (acc, ele) => acc + ele.inCartQty * (ele.productID.price * 1),
                0
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalCheckOut;
