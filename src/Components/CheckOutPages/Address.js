import React, { useState } from "react";
import CHeckOutNav from "./CheckOutNav";
import { useNavigate, NavLink } from "react-router-dom";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";
function Address() {
  let navigate = useNavigate();

  const localStorageaddress = localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : {};
  const token = JSON.parse(localStorage.getItem("user_info"));
  const [address, setAddress] = useState({
    address: localStorageaddress.address || "",
    city: localStorageaddress.city || "",
    postalCode: localStorageaddress.postalCode || "",
    country: localStorageaddress.country || "",
  });

  const adressHandler = async (e) => {
    e.preventDefault()
    if (localStorageaddress.address) {
      navigate("/Payment");
    } else {
      try {
        const data = await makeAnAPICall(
          `POST`,
          `http://localhost:5000/api/address`,
          null,
          null,
          address,
          token.token
        );
        localStorage.setItem("address", JSON.stringify(address));
        navigate("/Payment");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <CHeckOutNav step2 />
      <div className="shipping-address-container">
        <h2>Shipping</h2>
        <form onSubmit={(e) => adressHandler(e)}>
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="enter address"
            required
            value={address.address}
            onChange={(e) =>
              setAddress({ ...address, address: e.target.value })
            }
          />
          <label htmlFor="">City</label>
          <input
            type="text"
            placeholder="enter City"
            required
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
          />
          <label htmlFor="">Postal Code</label>
          <input
            type="number"
            placeholder="enter Postal Code"
            required
            value={address.postalCode}
            onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
          />
          <label htmlFor="">Country</label>
          <input
            type="text"
            placeholder="enter Country"
            required
            value={address.country}
            onChange={(e) =>
              setAddress({ ...address, country: e.target.value })
            }
          />
          <button>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Address;
