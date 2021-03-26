import React from 'react'
import "./App.css"
import {useCartContextProvider} from "../../Contexts/CartContext/CartContext"
function CartList() {
  const {state:{cartItems,loading}}= useCartContextProvider()
    return (
        <div className="cart-component">
          CartItemsList  
        </div>
    )
}

export default CartList
