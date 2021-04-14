import React from "react";
import "./App.css";
function SignUp() {
  return (
    <>
      <div className="login-container">
        <div className="login-image-container">
          <img
            src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdlaWdodCUyMGxpZnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1900&q=160"
            alt=""
          />

          <div className="login-left-bottom">
            <h2>One stop destination for healthier life</h2>
            <ul>
              <li>30 Day return policy </li>
              <li>Fast delivery across the world</li>
              <li>Invite your friends to get rewards</li>
            </ul>
          </div>
          <div className="login-right-card">
            <div className="login-right-top">
              <h2>Create your account</h2>
              <p>
                Have an account alredy ?
                <span style={{textDecoration:"underline"}}> Log In here</span>
              </p>
            </div>
            <div className="login-right-cta">
              <button className="loign-cta-goole"> Sign up with google</button>
              <button className="loign-cta-facebook"> Sign up with Facebook</button>
              <p className="login-right-micro-info"> or sign up email </p>
            </div>
            <div className="login-right-inputs">
              <div className="login-right-inpute-row-one">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
              </div>
              <div className="login-right-inpute-row-two">
                <input type="text" placeholder="Password min 6 char" />
              </div>
            </div>
            <div className="login-right-checkbox">
              <input type="checkbox" />
              <p>I agree with Terms and conditions</p>
            </div>
            <div className="login-final-cta">
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footerbottom/>  */}
    </>
  );
}

export default SignUp;
