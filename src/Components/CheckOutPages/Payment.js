import React from "react";
import CHeckOutNav from "./CheckOutNav";
import { useNavigate, NavLink } from "react-router-dom";
function Payment() {
    let navigate = useNavigate();
    const paymentHandler = (e) => {
        e.preventDefault()
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
              />
              <label htmlFor="">Paypal (Credit and debit card)</label>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                placeholder="enter City"
                required
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
