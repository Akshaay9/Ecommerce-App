import React, { useEffect, useState } from "react";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import { useParams, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";
function OrderSuccess() {
  const { state } = useLocation();
  const auth = JSON.parse(localStorage.getItem("user_info"));
  const {
    state: { userInfo },
  } = useLoginContext();
  const [orderedProduct, setOrderedProduct] = useState([]);
  const localStorageaddress = localStorage.getItem("address");
  const { address, city, country, postalCode } = localStorageaddress
    ? JSON.parse(localStorage.getItem("address"))
    : {};

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await makeAnAPICall(
        `GET`,
        `http://localhost:5000/api/checkout/${id}`,
        null,
        null,
        null,
        auth.token
      );
      setOrderedProduct([data.data]);
      
    })();
  }, []);
 

  return (
    <div style={{marginBottom:"2rem"}}>
      {/* top  success */}
      {state==null &&
      <div className="order-success-top">
        <div className="order-success-top-icon">
          <i class="far fa-check-circle"></i>
        </div>
        <h2>Thank You For Your Purchase</h2>
        <p>Your order number is : {id}</p>
        <p>we'll let you know once the product is delivered</p>
        <NavLink to="/products/mensnewdrop">
          {" "}
          <button>Continue Shopping</button>
        </NavLink>
      </div>}

      {/* row 1 */}
      <div className="order-success-row-one">
        <div className="order-success-row-one-left">
          <h2 >Shipping</h2>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>
            Address : {address},{city},{country},{postalCode}
          </p>
          {orderedProduct.length > 0 && !orderedProduct.isDelivered==true? <div className="alert alert-danger">Product not delivered</div>: <div className="alert alert-success">Product  delivered</div>}
         
        </div>
        <div className="order-success-row-one-right">
          <h2>Order Summary</h2>
          <p>
            Total Quantity:{" "}
            {orderedProduct.length > 0 &&
              orderedProduct[0].orderItems.reduce(
                (acc, ele) => acc + ele.inCartQty,
                0
              )}
          </p>
          <p>Shipping Price: 0.00</p>
          <p>
            Total Price :{" "}
            {orderedProduct.length > 0 &&
              orderedProduct[0].orderItems.reduce(
                (acc, ele) => acc + ele.inCartQty * (ele.productID.price * 1),
                0
              )}
            .00₹
          </p>
        </div>
      </div>
      <div className="order-success-row-one-left right-order-sucess-row-two">
          <h2 >Payment Method</h2>
          <p>Method: {orderedProduct.length>0&&orderedProduct[0].paymentMethod}</p>
          <p>Email: {userInfo.email}</p>
          <div className="alert alert-success">
               Paid on  : {orderedProduct.length>0 &&orderedProduct[0].paymentResult.update_time}
           </div>
      </div>
      <div className="right-order-sucess-row-three">
      <div className="wishList-components final-cart-items-ship-container">
            {orderedProduct.length > 0 &&
              orderedProduct[0].orderItems.map((ele) => (
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
    </div>
  );
}

export default OrderSuccess;
