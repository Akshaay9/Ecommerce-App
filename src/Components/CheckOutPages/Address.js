import React from 'react'
import CHeckOutNav from './CheckOutNav'
import { useNavigate, NavLink } from "react-router-dom";
function Address() {
  let navigate = useNavigate();
 
  const adressHandler = (e) => {
    e.preventDefault()
  navigate("/Payment")
}
    return (
        <div>
        <CHeckOutNav step2 />
        <div className="shipping-address-container">
          <h2>Shipping</h2>
          <form onSubmit={(e)=>adressHandler(e)}>
            <label htmlFor="">Address</label>
            <input type="text" placeholder="enter address" required />
            <label htmlFor="">City</label>
            <input type="text" placeholder="enter City" required/>
            <label htmlFor="">Postal Code</label>
            <input type="number" placeholder="enter Postal Code" required/>
            <label htmlFor="">Country</label>
            <input type="text" placeholder="enter Country" required />
            <button>Continue</button>
          </form>
        </div>
        </div>
    )
}

export default Address
