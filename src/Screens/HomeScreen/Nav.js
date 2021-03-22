import React, { useState } from "react";

function Nav() {
  const [showMens, setShowMen] = useState(false);
  const [showWomen, setShowWomen] = useState(false);
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
              onMouseEnter={() => setShowMen(true)}
              onMouseLeave={() => setShowMen(false)}
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
              onMouseEnter={() => setShowWomen(true)}
              onMouseLeave={() => setShowWomen(false)}
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
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>

      {/* shiping details */}
      <div className="shipping-details-update">
        <p>Free Shipping when you spend more than $5</p>
      </div>
      {/* Nav further Hoover Navigation */}
      {showMens && (
        <div
          className="nav-hoover-further-links mens-dropdown"
          onMouseEnter={() => setShowMen(true)}
          onMouseLeave={() => setShowMen(false)}
        >
          <div className="arrow-up"></div>
          <div className="box-arrow"></div>

          <div className="nav-hoover-further-links-heading">
            <h3>Mens Clothing</h3>
          </div>
          <div className="nav-hoover-further-links-li">
            <ul>
              <li>1) Hoodie and Jackets</li>
              <li>2) Tanks</li>
              <li>3) Track Suits</li>
              <li>4) T-shirts</li>
              <li>5) Socks</li>
            </ul>
          </div>
        </div>
      )}
      {showWomen && (
        <div
          className="nav-hoover-further-links  womens-dropdown"
          onMouseEnter={() => setShowWomen(true)}
          onMouseLeave={() => setShowWomen(false)}
        >
          <div className="arrow-up"></div>
          <div className="box-arrow"></div>
          <div className="nav-hoover-further-linksr-heading">
            <h3>Womem's Clothing</h3>
          </div>
          <div className="nav-hoover-further-linksli">
            <ul>
              <li>1) Hoodie and Jackets</li>
              <li>2) Tank Top</li>
              <li>3) Leggins</li>
              <li>4) T-shirts</li>
              <li>5) Socks</li>
            </ul>
          </div>
        </div>
      )}
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
              <h3>Trending</h3>
              <ul>
                <li>1) Hoodie and Jackets</li>
                <li>2) Tank Top</li>
                <li>3) Leggins</li>
                <li>4) T-shirts</li>
                <li>5) Socks</li>
              </ul>
            </div>

            <div className="nav-hoover-further-linksli">
            <h3>Accessories</h3>
              <ul>
                <li>1) Hoodie and Jackets</li>
                <li>2) Tank Top</li>
                <li>3) Leggins</li>
                <li>4) T-shirts</li>
                <li>5) Socks</li>
              </ul>
            </div>

            <div className="nav-hoover-further-linksli">
            <h3>Equipments</h3>
              <ul>
                <li>1) Hoodie and Jackets</li>
                <li>2) Tank Top</li>
                <li>3) Leggins</li>
                <li>4) T-shirts</li>
                <li>5) Socks</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Nav;
