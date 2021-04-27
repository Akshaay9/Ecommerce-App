import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";
import { useToastContext } from "../../Contexts/ToastContext/ToastContext";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import "./App.css";
function UserProfile() {
  // useState

  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [updatePasswordError, setUpdatePasswordError] = useState("");
  const [orderedDetails, setOrderedDetails] = useState([]);
  const [loader, setLoader] = useState(false);

  // UseContext
  const {
    state: { userInfo },
  } = useLoginContext();
  const { toastDispatch } = useToastContext();


  useEffect(() => {
    (async () => {
      const data = await makeAnAPICall(
        `GET`,
        `http://localhost:5000/api/checkout/all`,
        null,
        null,
        null,
        userInfo.token
      );
      setOrderedDetails(data.data);
    })();
  }, []);

   useEffect(() => {
    let special = /[\W]{1,}/;
    if (password.password.length == 0) {
      setPasswordError("this field is required");
    } else if (password.password.length < 5) {
      setPasswordError("passowrd should contain min 6 char");
    } else if (password.password.search(/[A-Z]/) < 0) {
      setPasswordError("password should contain one UpperCase");
    } else if (password.password.search(/[a-z]/) < 0) {
      setPasswordError("password should contain one LowerCase");
    } else if (password.password.search(/[0-9]/) < 0) {
      setPasswordError("password should contain one number");
    } else if (!special.test(password.password)) {
      setPasswordError("password should contain one special char");
    } else {
      setPasswordError("");
    }
   }, [password.password]);
  
   useEffect(() => {
    let special = /[\W]{1,}/;
    if (password.confirmPassword.length == 0) {
      setUpdatePasswordError("this field is required");
    } else if (password.confirmPassword.length < 5) {
      setUpdatePasswordError("passowrd should contain min 6 char");
    } else if (password.confirmPassword.search(/[A-Z]/) < 0) {
      setUpdatePasswordError("password should contain one UpperCase");
    } else if (password.confirmPassword.search(/[a-z]/) < 0) {
      setUpdatePasswordError("password should contain one LowerCase");
    } else if (password.confirmPassword.search(/[0-9]/) < 0) {
      setUpdatePasswordError("password should contain one number");
    } else if (!special.test(password.confirmPassword)) {
      setUpdatePasswordError("password should contain one special char");
      
    }
    else if (password.password==password.confirmPassword) {
      setUpdatePasswordError("Both password are same");
      }
    else {
      setUpdatePasswordError("");
    }
  }, [password.confirmPassword]);

  const updatePassowrd=(e)=>{
    e.preventDefault()
    const updatePass = {
      "password": password.password,
      "updatePass":password.confirmPassword
    }
    setLoader(true);
    makeAnAPICall(
      "POST",
      `http://localhost:5000/api/users/${userInfo.id}`,
      null,
      null,
      updatePass,
      userInfo.token,
      toastDispatch,
      "Successfully Changed password",
      setLoader
    );

  }
  

  return (
    <div className="user-profile">
      <div className="profile-left">
        <form onSubmit={(e) => updatePassowrd(e)}>
          <h2>Update Profile</h2>

          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password min 6 char"
            required
            minLength="5"
            value={password.password}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
            onChange={(e) =>
              setPassword({ ...password, password: e.target.value })
            }
          />
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
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            placeholder="Password min 6 char"
            required
            minLength="5"
            value={password.confirmPassword}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
            onChange={(e) =>
              setPassword({ ...password, confirmPassword: e.target.value })
            }
          />
              {updatePasswordError !== "" ? (
                <p className="error-handler-input error">
                  {updatePasswordError}
                  <i className="fas fa-exclamation-circle"></i>
                </p>
              ) : (
                <p className="error-handler-input sucess">
                  Success<i className="fas fa-check-circle"></i>
                </p>
              )}
       

              <button disabled={loader} className="black-btn-disable">
              {loader ? (
                <i class="fas fa-spinner fa-spin login-spin"></i>
              ) : (
                "Update Password"
              )}
            </button>
        </form>
      </div>

      <div className="profile-right">
        <h2>My Orders</h2>
        <div className="profile-right-heading">
          <div className="heading">
            <p> ID</p>
          </div>
          <div className="heading ">
            <p> Date</p>
          </div>
          <div className="heading ">
            <p> Total</p>
          </div>
          <div className="heading ">
            <p> Paid</p>
          </div>
          <div className="heading ">
            <p>Delivered</p>
          </div>
          <div className="heading ">
            <p>Details</p>
          </div>
        </div>

        <div className="profile-left-product-details">
          {orderedDetails.length > 0 &&
            orderedDetails.map((ele, index) => (
              <div className="profile-left-products">
                <div className="product-details">
                  <p className="product-left-id">{ele._id}</p>
                </div>
                <div className="product-details">
                  <p>{ele.paymentResult.update_time.slice(0, 7)}</p>
                </div>
                <div className="product-details">
                  <p>
                    {orderedDetails.length > 0 &&
                      orderedDetails[index].orderItems.reduce(
                        (acc, ele) =>
                          acc + ele.inCartQty * (ele.productID.price * 1),
                        0
                      )}
                    .00₹
                  </p>
                </div>

                <div className="product-details">
                  <p style={{ color: "green" }}>
                    <i class="fas fa-check-circle"></i>
                  </p>
                </div>
                <div className="product-details">
                  <p style={{ color: "red", textAlign: "center" }}>
                    <i class="fas fa-times-circle"></i>
                  </p>
                </div>
                <div className="product-details further-details">
                  <NavLink  state={{ from: "profile" }} to={`/ordersuccess/${ele._id}`}>
                    {" "}
                    <p>View Details</p>
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
