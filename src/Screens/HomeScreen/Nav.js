import React, { useState } from "react";

function Nav() {
  const [showCategories, setSgowCategories] = useState(false);

  return (
    <div>
      <div className="nav">
        <div className="nav_left">
          <div className="nav_logo">
            <img
              src="https://static.cure.fit/assets/images/curefit-v-man.svg"
              alt=""
            />
          </div>
          <div className="nav_name">
            <h2>Fit Sharkk</h2>
          </div>
        </div>
        <div className="nav_center">
          <ul>
            <li
              className="hr- hr-underline-left li-bold mens-li"
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
          <div className="nav_cart">
          <i class="fas fa-heart"></i>
          </div>
          <div className="nav_cart">
            <i className="fas fa-shopping-cart"></i>
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
