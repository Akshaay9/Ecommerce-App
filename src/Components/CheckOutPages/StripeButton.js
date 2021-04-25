import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import { useNavigate, NavLink } from "react-router-dom";

const StripeButton = (props) => {
  let navigate = useNavigate();
  const {
    state: { cartItems },cartContextDispatch
  } = useCartContextProvider();

  const localStoragePaymentInfo = localStorage.getItem("payment")
    ? JSON.parse(localStorage.getItem("payment"))
    : {};
  const localStorageaddress = localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : {};
  const auth = JSON.parse(localStorage.getItem("user_info"));
  const orderItems = cartItems.map((ele) => {
    return {
      productID: ele.productID._id,
      inCartQty: ele.inCartQty,
    };
  });
  const getToken = (token) => {
    updatePaymentAndRedirect(token);
    deleteCartItems()
  };
  const updatePaymentAndRedirect = async (token) => {
    const finalOrderDetails = {
      orderItems: orderItems,
      address: localStorageaddress._id,
      paymentMethod: localStoragePaymentInfo.payment,
      paymentResult: {
        id: token.id,
        status: "success",
        update_time: new Date().toLocaleString(),
        email_address: token.email,
      },
    };

    const data = await makeAnAPICall(
      `POST`,
      `http://localhost:5000/api/checkout`,
      null,
      null,
      finalOrderDetails,
      auth.token
    );
    navigate(`/ordersuccess/${data._id}`);
  };

  const deleteCartItems = async () => {
   const data= await makeAnAPICall(
      `DELETE`,
      `http://localhost:5000/api/deletecart`,
      null,
      null,
      null,
      auth.token
    );
    console.log(data);
    cartContextDispatch({type:"CLEAR_CART"})
  }

  return (
    <StripeCheckout
      label="Place your order"
      name="Joe Shop"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/3BmghZC/Screenshot-3.png"
      description={`Your Total bill is ${props.totalAmount}`}
      panelLabel="Pay Now"
      token={getToken}
      stripeKey="pk_test_51IjQHaSGCwM9HCHXhQTxmsUIrzXwo8WpF30Mf6fTpYjSMEteBO3Pex8TvNFRXggVrpHDdADvh1v6Om0JbOb800UU00VtX1IVRw"
    />
  );
};

export default StripeButton;
