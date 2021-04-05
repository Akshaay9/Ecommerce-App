import React, { useState } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { NavLink } from "react-router-dom";

function Nav({showMobileNavNar,setShowMobileNavBar}) {
  const {
    state: { cartItems, loading },
  } = useCartContextProvider();

  const {
    state: { wishListItems },
  } = useWishListContextProvider();

  const lengthOfCartItems = () => {
    const length = cartItems.reduce((acc, ele) => acc + ele.inCartQty, 0);
    return length;
  };

  return (
    <div>
      <div className="nav">
        <div className="nav_left">
          <div className="nav_logo">
            <NavLink to="/">
              <img
                src="https://static.cure.fit/assets/images/curefit-v-man.svg"
                alt=""
              />
            </NavLink>
          </div>
          <NavLink to="/search">
            <div className="nav_search desktop-hide-it">
              <i className="fas fa-search"></i>
            </div>
          </NavLink>
          <div className="nav_name">
            <NavLink to="/">
              <h2>Fit Sharkk</h2>
            </NavLink>
          </div>
          <div className="nav_hamberger">
            <i class="fas fa-bars"
            onClick={()=>setShowMobileNavBar(true)}
            ></i>
          </div>
        </div>
        <div className="nav_center">
          <ul>
            <NavLink to="/products/mensnewdrop">
              <li className="hr- hr-underline-left li-bold mens-li">Mens</li>
            </NavLink>
            <NavLink to="/products">
              <li className="hr-underline-left li-bold">Products</li>
            </NavLink>

            <NavLink to="/products/womensnewdrop">
              <li className="hr-underline-left li-bold womens-li">Womens</li>
            </NavLink>
          </ul>
        </div>
        <div className="nav_right">
          <NavLink to="/search">
            <div className="nav_search mobile-hide-it">
              <i className="fas fa-search"></i>
            </div>
          </NavLink>
          <div className="nav_logi">
            <i className="fas fa-user"></i>
          </div>
          <NavLink to="/wishlist">
            <div className="nav_cart">
              <div className="badge badge-skyBlue">
                <i class="fas fa-heart"></i>
                {wishListItems.length > 0 && (
                  <span>{wishListItems.length}</span>
                )}
              </div>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className="nav_cart">
              <div className="badgeContainer1 badge-skyBlue">
                <i class="fas fa-shopping-cart"></i>
                {/* <span>1</span> */}
                {cartItems.length > 0 && <span>{lengthOfCartItems()}</span>}
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      <div className={`nav_ul_desktop desktop-hide-it ${showMobileNavNar ? "show_nav":""}`}>
      {/* <div className="nav_ul_desktop desktop-hide-it"> */}
        <div className="login">
          <div className="nav_login">
            <i className="fas fa-user"></i>
          </div>
          <i class="fas fa-times"
          onClick={()=>setShowMobileNavBar(false)}
          ></i>
        </div>
        <ul>
          <li>Mens</li>
          <li>Products</li>
          <li>Womens</li>
          <li>Home Workout</li>
          <li>Gym Accessories</li>
          <li>Resistance Training</li>
          <li>Yoga accessories</li>
        </ul>
      </div>

      {/* shiping details */}
      <div className="shipping-details-update">
        <p>Free Shipping when you spend more than $5</p>
      </div>
      {/* Nav further Hoover Navigation */}
    </div>
  );
}
export default Nav;
