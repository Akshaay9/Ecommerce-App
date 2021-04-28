import React, { useEffect, useState } from "react";
import CHeckOutNav from "./CheckOutNav";
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
import { useAddressContext } from "../../Contexts/AddressContext/AddressContext";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";
function Address() {
  const {
    state: { userInfo },
  } = useLoginContext();

  const {
    state: { userAddress },
    addressDispatch,
  } = useAddressContext();

  let navigate = useNavigate();

 

 

  const [selectAddress, setSelectAddress] = useState(
    localStorage.getItem("address")?JSON.parse(localStorage.getItem("address")):""
  );
  console.log(selectAddress)


  useEffect(() => {
    (async () => {
      try {
        await makeAnAPICall(
          "GET",
          `http://localhost:5000/api/address/`,
          addressDispatch,
          "LOAD_ADDRESS",
          null,
          userInfo.token,
          null,
          null,
          null
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const deleteAddress = async (id) => {
    try {
      await makeAnAPICall(
        "DELETE",
        `http://localhost:5000/api/address/${id}`,
        addressDispatch,
        "LOAD_ADDRESS",
        null,
        userInfo.token,
        null,
        null,
        null
      );
    } catch (error) {}
  };

  const adressHandler = async (e) => {
    e.preventDefault();
    console.log("hey");
    localStorage.setItem("address", JSON.stringify(selectAddress));
    navigate("/payment");
  };
  return (
    <div>
      <CHeckOutNav step2 />
      <div className="shipping-address-container">
        <h2>Shipping</h2>
        <form onSubmit={(e) => adressHandler(e)}>
          {userAddress.map((ele) => (
            <div className="singleAdress" key={ele._id}>
              {/* {console.log(parseInt(selectAddress._id) === parseInt(ele._id))}
              {console.log(ele._id)} */}
             
              <input
                type="radio"
                name="address"
                required
                checked={parseInt(selectAddress._id) == parseInt(ele._id)}
                onChange={() => setSelectAddress(ele)}
              />
              <label htmlFor="">
                <p>
                  {" "}
                  <span>address:</span> {ele.address}
                </p>
                <p>
                  <span>City:</span>
                  {ele.city}
                </p>
                <p>
                  <span>Postal Code:</span>
                  {ele.postalCode}
                </p>
                <p>
                  <span>country:</span>
                  {ele.country}
                </p>
              </label>
              <div className="singleAdress-icons">
                {" "}
                <i
                  class="fas fa-trash"
                  onClick={() => deleteAddress(ele._id)}
                ></i>
                <NavLink to={`/updateAddress/${ele._id}`}>
                  <i class="fas fa-edit"></i>
                </NavLink>
              </div>
            </div>
          ))}
          {userAddress.length > 0 && <button>Continue</button>}
        </form>
        <NavLink to={`/updateAddress`} state={{ from: "newAddress" }}>
          <button>Add New Address</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Address;
