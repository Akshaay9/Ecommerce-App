import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const { state } = useLocation();
  // grab conetxt
  const {
    state: { userInfo },
    authDispatch,
  } = useLoginContext();
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (name.length == 0) {
      setInputError("This field is required");
    } else if (name.length < 4) {
      setInputError("min 4 length is required");
    } else setInputError("");
  }, [name]);

  useEffect(() => {
    var re = /\S+@\S+\.\S+/;
    if (email.length == 0) {
      setEmailError("This field is required");
    } else if (!re.test(email)) {
      setEmailError("Not and valid email");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    let special = /[\W]{1,}/;
    if (password.length == 0) {
      setPasswordError("this field is required");
    } else if (password.length < 5) {
      setPasswordError("passowrd should contain min 6 char");
    } else if (password.search(/[A-Z]/) < 0) {
      setPasswordError("password should contain one UpperCase");
    } else if (password.search(/[a-z]/) < 0) {
      setPasswordError("password should contain one LowerCase");
    } else if (password.search(/[0-9]/) < 0) {
      setPasswordError("password should contain one number");
    } else if (!special.test(password)) {
      setPasswordError("password should contain one special char");
    } else {
      setPasswordError("");
    }
  }, [password]);

  const submitUser = async (e) => {
    e.preventDefault();
    const dataToBeSent = {
      name: name,
      email: email,
      password: password,
    };
    makeAnAPICall(
      "POST",
      "http://localhost:5000/api/users/signup",
      authDispatch,
      "USER_REGISTER_SUCCESSFULL",
      dataToBeSent,
      null
    );
  };
  if (userInfo.token) {
    navigate(state?.from ? state.from : "/products/mensnewdrop");
  }


  return (
    <>
      <div className="login-container">
        <div className="login-left-bottom">
          <h2>One stop destination for healthier life.</h2>
          <ul>
            <li>30 Day return policy </li>
            <li>Fast delivery across the world</li>
            <li>Invite your friends to get rewards</li>
          </ul>
        </div>

        <div className="login-right-card">
          <form onSubmit={(e) => submitUser(e)}>
            <div className="login-right-top">
              <h2 style={{ color: "black" }}>Create your account</h2>
              <p>
                Have an account alredy ?
                <NavLink to="/login">
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {" "}
                    Log In here
                  </span>
                </NavLink>
              </p>
            </div>
            <div className="login-right-cta">
              <button className="loign-cta-goole"> Sign up with google</button>
              <button className="loign-cta-facebook">
                {" "}
                Sign up with Facebook
              </button>
              <p className="login-right-micro-info"> or sign up email </p>
            </div>
            <div className="login-right-inputs">
              <div className="login-right-inpute-row-one">
                <input
                  type="text"
                  placeholder="name"
                  required
                  minLength="5"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
              </div>
              {/* {errors} */}
              <div className="error-div-input">
                {inputError !== "" ? (
                  <p className="error-handler-input error">
                    {inputError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}

                {emailError !== "" ? (
                  <p className="error-handler-input error">
                    {emailError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}
              </div>
              {/* {} */}
              <div className="login-right-inpute-row-two">
                <input
                  type="password"
                  placeholder="Password min 6 char"
                  required
                  minLength="5"
                  value={password}
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="error-div-input">
                {passwordError !== "" ? (
                  <p className="error-handler-input error">
                    {passwordError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}
              </div>
            </div>
            <div className="login-right-checkbox">
              <input type="checkbox" required />
              <p>I agree with Terms and conditions</p>
            </div>
            <div className="login-final-cta">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footerbottom/>  */}
    </>
  );
}

export default SignUp;
