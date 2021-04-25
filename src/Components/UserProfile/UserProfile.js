import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import "./App.css";
function UserProfile() {
  // useState

  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [orderedDetails, setOrderedDetails] = useState([]);

  // UseContext
  const {
    state: { userInfo },
  } = useLoginContext();

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

  const data = () => {
    {
      /* {orderedDetails.length > 0 &&
              orderedDetails.orderItems.reduce(
                (acc, ele) => acc + ele.inCartQty * (ele.productID.price * 1),
                0
              )} */
    }
    orderedDetails.length > 0 && orderedDetails.reduce((acc, ele) => acc);
  };
  console.log(orderedDetails);

  return (
    <div className="user-profile">
      <div className="profile-left">
        <form>
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

          <button>Update Profile</button>
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
