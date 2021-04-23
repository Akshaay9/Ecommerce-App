import React, { useState } from "react";
import CHeckOutNav from "./CheckOutNav";
import { useNavigate, NavLink } from "react-router-dom";
function Payment() {
  const localStoragePaymentInfo = localStorage.getItem("payment") ? JSON.parse(localStorage.getItem("payment")) : {}
 
  const [paymentInfo, setPaymentInfo] = useState({
  payment:localStoragePaymentInfo.payment||""
  })
  
  console.log(paymentInfo);

    let navigate = useNavigate();
    const paymentHandler = (e) => {
      e.preventDefault()
      localStorage.setItem("payment",JSON.stringify(paymentInfo))
        navigate("/FinalCheckOut")
    }

  return (
    <div>
      <CHeckOutNav step2 step3 />
      <div className="shipping-address-container payment-container">
        <h2 style={{marginBottom:".6rem"}}>Payment</h2>
        <form onSubmit={(e)=>paymentHandler(e)}>
          <div className="form-container">
            <div>
              <input
                type="radio"
                name="payment"
                placeholder="enter address"
                required
                checked={paymentInfo.payment == "paypal"}
                onChange={()=>setPaymentInfo({payment:"paypal"})}
              />
              <label htmlFor="">Paypal (Credit and debit card)</label>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                placeholder="enter City"
                required
                checked={paymentInfo.payment == "stripe"}
                onChange={()=>setPaymentInfo({payment:"stripe"})}
              />
              <label htmlFor="">Stripe</label>
            </div>
          </div>
          <button>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
