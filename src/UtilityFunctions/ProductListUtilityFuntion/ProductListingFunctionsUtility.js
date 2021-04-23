import axios from "axios"
import { setAlert } from "../../Contexts/ToastContext/ToastAction"
import { makeAnAPICall } from "./APiCalls"




// const removeFromCart = (cartContextDispatch,product,toastDispatch) => {
//   cartContextDispatch({
//     type: "REMOVE_FROM_CART",
//     payload: product,
//   })
//   setAlert("Product has removed from the cart","danger",toastDispatch)
// }


export const checkIfTheProductIsInCart = (product, cartItems, cartContextDispatch, toastDispatch) => {

  const token = JSON.parse(localStorage.getItem("user_info"))
  
  const addToCart = async(id) => {
    await makeAnAPICall(`POST`,`http://localhost:5000/api/cart/${id}`,cartContextDispatch,"LOAD_CART_ITEMS",null,token.token) 
  }
  const inCreaseQTY = async (id,qty) => {
    await makeAnAPICall(`POST`,`http://localhost:5000/api/cart/${id}`,cartContextDispatch,"LOAD_CART_ITEMS",{
      "inCartQty":qty
  },token.token) 
  }
  const decreaseQTY = async (id,qty) => {
    await makeAnAPICall(`POST`,`http://localhost:5000/api/cart/${id}`,cartContextDispatch,"LOAD_CART_ITEMS",{
      "inCartQty":qty
  },token.token) 
  }
  const deleteItem = async (id) => {
    await makeAnAPICall(`DELETE`,`http://localhost:5000/api/cart/${id}`,cartContextDispatch,"LOAD_CART_ITEMS",null,token.token) 
  }




  const newItems = [...cartItems];
  const isItemOnTheCart = newItems.filter((ele) => ele.productID._id == product._id);
    if (isItemOnTheCart.length > 0) {
      return (
        <div className="card-add-to-cart-action">
          {" "}
          <h3>
            {isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].productID.inStock ? (
              <span style={{ color: "red" }}>Out Of Stock</span>
            ) : (
              "Quick Add"
            )}
          </h3>{" "}
          <div className="card-ad-to-cart-action-qty">
            {" "}
            <button
              className="btn-secondary btn-secondary-hr-outline-in"
              onClick={() =>
                isItemOnTheCart[0].inCartQty == 1
                   ?
                   deleteItem(product._id)
                  : decreaseQTY(product._id,isItemOnTheCart[0].inCartQty-1)
              }
            >
              <span>-</span>
            </button>{" "}
            {isItemOnTheCart[0].inCartQty}{" "}
            <button
              disabled={
                isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].productID.inStock
              }
              className="btn-secondary btn-secondary-hr-outline-in secondary-disabled"
              onClick={() =>
                inCreaseQTY(product._id,isItemOnTheCart[0].inCartQty+1)
              }
            >
              <span>+</span>
            </button>{" "}
          </div>{" "}
        </div>
      );
    } else
      return (
        <div className="card-add-to-cart-action">
          <h3>Quick ADD</h3>
          <button
            className="btn-primary btn-primary-hr-outline-out"
            onClick={() =>
              addToCart(product._id)}
          >
            Add To Cart
          </button>
        </div>
      );
};
  
export const checkIfTheProductIsWished = (ele, wishListItems) => {
  console.log(wishListItems)

    const isItemsWished = wishListItems.filter((prod) => prod.productID._id == ele._id);
    let heartColor;
    if (isItemsWished.length > 0) {
      return (heartColor = {
        color: "red",
      });
    } else {
      return (heartColor = {
        color: " rgb(172, 161, 161)",
      });
    }
};

export const dispatchBasedOnBroductWishedOrNot = async (ele, wishListItems, wishListContextDispatch) => {
  const token = JSON.parse(localStorage.getItem("user_info"))
    const isItemsWished = wishListItems.filter((prod) => prod.productID._id == ele._id);
    if (isItemsWished.length == 0) {
      await makeAnAPICall(`POST`,`http://localhost:5000/api/wishlist/${ele._id}`,wishListContextDispatch,"LOAD_WISHLIST",null,token.token) 
    } else {
      await makeAnAPICall(`DELETE`,`http://localhost:5000/api/wishlist/${ele._id}`,wishListContextDispatch,"LOAD_WISHLIST",null,token.token) 
    }
  };