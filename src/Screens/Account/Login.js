import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import "./App.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    useEffect(() => {
        var re = /\S+@\S+\.\S+/;
        if (email.length == 0) {
         setEmailError("This field is required")
        } else if (!re.test(email)) {
          setEmailError("Not and valid email")
        } else {
          setEmailError("")
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


  const loginUSer = async () => {
  
    const data = await axios.post(`https://stark-falls-25364.herokuapp.com/api/users`,{
      "email":"test@gmail.com",
      "password":"Test98#"
  } )
    console.log(data);
  }

  const loginUser = (e) => {
    e.preventDefault()

    // makeAnAPICall("GET","https://stark-falls-25364.herokuapp.com/api/users",null,null,dataToBeDispatched,null)
    loginUSer()
  
  }
    
    
  return (
    <div className="signup">
      <div className="signup-card">
        <form onSubmit={(e)=>loginUser(e)}>
          <div className="login-right-top">
            <h2 style={{ color: "black" }}>Log in to your account</h2>
            <p>
              Dont Have an account alredy ?
              <NavLink to="/signup">
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  {" "}
                  Sign In here
                </span>
              </NavLink>
            </p>
          </div>
          <div className="login-right-cta">
            <button className="loign-cta-goole"> login in with google</button>
            <button className="loign-cta-facebook">
              {" "}
              login in with Facebook
            </button>
            <p className="login-right-micro-info"> or login in email </p>
          </div>
          <div className="login-right-inputs">
            <div className="login-right-inpute-row-one login-input-email">
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
              {emailError !== "" ? (
                <p className="error-handler-input error">
                  {emailError}
                  <i class="fas fa-exclamation-circle"></i>
                </p>
              ) : (
                <p className="error-handler-input sucess">
                  Success<i class="fas fa-check-circle"></i>
                </p>
              )}
            </div>
            {/* {} */}
            <div className="login-right-inpute-row-two">
              <input
                type="password"
                placeholder="Password min 6 char"
                required
                minlength="5"
                value={password}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="error-div-input">
              {passwordError !== "" ? (
                  <p className="error-handler-input error">
                    {passwordError}
                    <i class="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i class="fas fa-check-circle"></i>
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
  );
}

export default Login;
