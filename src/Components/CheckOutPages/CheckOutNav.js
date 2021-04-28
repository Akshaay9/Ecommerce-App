import React from "react";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";
import { useNavigate, NavLink } from "react-router-dom";
import "./App.css";
function CHeckOutNav({ step1, step2, step3, step4,updateAddress }) {
  let navigate = useNavigate();
  const {
    state: { userInfo },
  } = useLoginContext();
  return (
    <div className="mini-nav-container">
      {/* 1 */}
      <div className="mini-nav">
        {!userInfo.token ? (
          <NavLink to="/login">  <p className="mini-nav ">Sign-In</p></NavLink>
        
      
        ) : (
          <p className="mini-nav disabled-mini-nav">Sign-In</p>
        )}
      </div>
      <div className="mini-nav">
        {step2 ? (
          !userInfo.token ? (
            navigate("/login")
          ) : (
            <NavLink to="/address"><p>{updateAddress?"Update shipping":"shipping"}</p></NavLink>
          )
        ) : (
          <p className="mini-nav disabled-mini-nav"> Shipping</p>
        )}
      </div>
      <div className="mini-nav">
        {step3 ? (
          !userInfo.token ? (
            navigate("/login")
          ) : (
            <NavLink to="/payment"><p>Payment</p></NavLink>
          )
        ) : (
          <p className="mini-nav disabled-mini-nav">Payment</p>
        )}
      </div>
      <div className="mini-nav">
        {step4 ? (
          !userInfo.token ? (
            navigate("/login")
          ) : (
            <NavLink to="/FinalCheckOut"><p>Place order</p></NavLink>
          )
        ) : (
          <p className="mini-nav disabled-mini-nav">Place Order</p>
        )}
      </div>
    </div>
  );
}

export default CHeckOutNav;
