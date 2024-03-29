import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { makeAnAPICall } from "../../APiCalls";
import { useNavigate, NavLink } from "react-router-dom";
import { useToastContext } from "../../Contexts/ToastContext/ToastContext";
import { BE_URL } from "../../const";

const StripeButton = (props) => {
  let navigate = useNavigate();
  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();

  const localStoragePaymentInfo = localStorage.getItem("payment")
    ? JSON.parse(localStorage.getItem("payment"))
    : {};
  const localStorageaddress = localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : {};

  console.log(localStorageaddress);
  console.log(localStorageaddress._id);

  const auth = JSON.parse(localStorage.getItem("user_info"));
  const { toastDispatch } = useToastContext();
  const orderItems = cartItems.map((ele) => {
    return {
      productID: ele.productID._id,
      inCartQty: ele.inCartQty,
    };
  });
  const getToken = (token) => {
    updatePaymentAndRedirect(token);
    deleteCartItems();
  };
  const updatePaymentAndRedirect = async (token) => {
    props.setLoader(true);
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
      `${BE_URL}/api/checkout`,
      null,
      null,
      finalOrderDetails,
      auth.token,
      toastDispatch,
      "Payment Successfull"
    );
    props.setLoader(false);
    navigate(`/ordersuccess/${data._id}`);
  };

  const deleteCartItems = async () => {
    const data = await makeAnAPICall(
      `DELETE`,
      `${BE_URL}/api/deletecart`,
      null,
      null,
      null,
      auth.token
    );
    console.log(data);
    cartContextDispatch({ type: "CLEAR_CART" });
  };

  return (
    <StripeCheckout
      label="Place your order"
      name="AKshay's Shop"
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
