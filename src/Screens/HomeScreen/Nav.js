import React, { useState } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useRoutingContext } from "../../Contexts/RoutingContext/routingContextProvider";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";

function Nav() {
  const [showCategories, setSgowCategories] = useState(false);
  const { setRoute } = useRoutingContext();
  const { state: { cartItems, loading } } = useCartContextProvider()
  
  const {state:{wishListItems}}=useWishListContextProvider()


  const lengthOfCartItems = () => {
    const length = cartItems.reduce((acc, ele) => acc + ele.inCartQty, 0)
    return length  
  }
 
 
  

  return (
    <div>
      <div className="nav">
        <div className="nav_left">
          <div className="nav_logo">
            <img
              onClick={() => setRoute("HomeScreenComponents")}
              src="https://static.cure.fit/assets/images/curefit-v-man.svg"
              alt=""
            />
          </div>
          <div
            className="nav_name"
            onClick={() => setRoute("HomeScreenComponents")}
          >
            <h2>Fit Sharkk</h2>
          </div>
        </div>
        <div className="nav_center">
          <ul>
            <li
              className="hr- hr-underline-left li-bold mens-li"
              onClick={() => setRoute("MensNewDrop")}
            >
              Mens
            </li>
            <li
              className="hr-underline-left li-bold"
              onMouseEnter={() => setSgowCategories(true)}
              onMouseLeave={() => setSgowCategories(false)}
            >
              Products
            </li>
            <li
              onClick={() => setRoute("WomensNewDrop")}
              className="hr-underline-left li-bold womens-li"
            >
              Womens
            </li>
          </ul>
        </div>
        <div className="nav_right">
          <div className="nav_search">
            <i className="fas fa-search"></i>
          </div>
          <div className="nav_logi">
            <i className="fas fa-user"></i>
          </div>
          <div className="nav_cart"
          onClick={()=>setRoute("WishListComponent")} 
          >
          <div className="badge badge-skyBlue">
              <i class="fas fa-heart"></i>
              {wishListItems.length>0 && <span>{ wishListItems.length}</span> }
      
      </div>
           
          </div>
          <div className="nav_cart"
          onClick={()=>setRoute("CartComponent")}
          >
           <div className="badgeContainer1 badge-skyBlue">
        <i class="fas fa-shopping-cart"></i>
              {/* <span>1</span> */}
              { cartItems.length> 0 && <span>{lengthOfCartItems()}</span>}
              
      </div>
          </div>
        </div>
        {showCategories && (
          <div
            className="nav-hoover-further-links  product-dropdown"
            onMouseEnter={() => setSgowCategories(true)}
            onMouseLeave={() => setSgowCategories(false)}
          >
            <div className="arrow-up"></div>
            <div className="box-arrow"></div>
            <div className="nav-hoover-further-links-container">
              <div className="nav-hoover-further-linksli">
                <h3>Accessories</h3>
                <ul>
                  <li>1) Bags</li>
                  <li>2) Bottles</li>
                  <li>3) Mats</li>
                  <li>4) Straps</li>
                  <li>5) Glouse</li>
                  <li>6) Belts</li>
                </ul>
              </div>

              <div className="nav-hoover-further-linksli">
                <h3>Equipments</h3>
                <ul>
                  <li>1) Dumbells</li>
                  <li>2) Barbells</li>
                  <li>3) Weights</li>
                  <li>4)Benches</li>
                  <li>5) Squat-racks</li>
                </ul>
              </div>
            </div>
          </div>
        )}
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
