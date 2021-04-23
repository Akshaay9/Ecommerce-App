import React from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { NavLink } from "react-router-dom";
import emptyWISHLISTimage from "../../Assets/wish.svg";
import { makeAnAPICall } from "../../UtilityFunctions/ProductListUtilityFuntion/APiCalls";

function WishLists() {
  const {
    state: { wishListItems },
    wishListContextDispatch,
  } = useWishListContextProvider();
  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();
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

  // check if the items present in cart
  const checkIfTheProductIsInCart = (product) => {
    console.log(product);
    const newItems = [...cartItems];
    const isItemOnTheCart = newItems.filter((ele) => ele.productID._id == product.productID._id);
    console.log(newItems);
    if (isItemOnTheCart.length > 0) {
      return (
        <div className="card-add-to-cart">
          {" "}
          <h3 style={{ textAlign: "center" }}>
            {isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock ? (
              <span style={{ color: "red" }}>Out Of Stock</span>
            ) : (
              "Quick Add"
            )}
          </h3>{" "}
          <div>
            {" "}
            <button
              className="btn-secondary btn-secondary-hr-outline-in wishlist-cta"
              onClick={() =>
                isItemOnTheCart[0].inCartQty == 1
                  ? deleteItem(product.productID._id)
                  : decreaseQTY(product.productID._id,isItemOnTheCart[0].inCartQty-1)
              }
              
            >
              <span>-</span>
            </button>{" "}
            {isItemOnTheCart[0].inCartQty}{" "}
            <button
              disabled={
                isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock
              }
              className="btn-secondary btn-secondary-hr-outline-in  wishlist-cta"
              onClick={() =>
                inCreaseQTY(product.productID._id,isItemOnTheCart[0].inCartQty+1)
              }
            >
              <span>+</span>
            </button>{" "}
          </div>{" "}
        </div>
      );
    } else
      return (
        <div className="card-add-to-cart singleProductPage">
          <button
            className="btn-primary btn-primary-hr-outline-out singleproductpage-cta"
            onClick={() =>
              addToCart(product.productID._id)
            }
          >
            Add To Cart
          </button>
        </div>
      );
  };
  return (
    <div>
      <div className="wishList-heading">Your WishList</div>
      {wishListItems.length == 0 && (
        <img className="emptyWishIMG" src={emptyWISHLISTimage} alt="" />
      )}
      <div className="wishList-components">
        {wishListItems.length > 0 &&
          wishListItems.map((ele) => (
            <div className="wishlist-component-container">
              <NavLink to={`/products/${ele.productID._id}`}>
                <div className="wishlist-component-container-left">
                  <div className="cart-component-left-img">
                    <img src={ele.productID.images[0].img} alt="" />
                  </div>
                  <div className="wishlist-component-container-left-desc">
                    <h2>{ele.productID.name}</h2>
                    <h4>{ele.productID.price}.00₹</h4>
                    <p>{ele.productID.desc.slice(0, 200)}....</p>
                  </div>
                </div>
              </NavLink>
              <div className="wishlist-component-container-right">
                <i
                  className="fas fa-trash"
                  onClick={() =>
                    makeAnAPICall(`DELETE`,`http://localhost:5000/api/wishlist/${ele.productID._id}`,wishListContextDispatch,"LOAD_WISHLIST",null,token.token)
                  }
                ></i>
                {checkIfTheProductIsInCart(ele)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WishLists;
