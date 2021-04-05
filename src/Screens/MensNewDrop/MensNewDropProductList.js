import axios from "axios";
import React, { useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useMensNewProductListsContext } from "../../Contexts/ProductListContext/MensNewDropProductListing";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { NavLink } from "react-router-dom";
import { makeAnAPICall } from "../../UtilityFunctions/APiCalls"
import { checkIfTheProductIsInCart, checkIfTheProductIsWished, dispatchBasedOnBroductWishedOrNot } from "../../UtilityFunctions/ProductListingFunctionsUtility"


function MensNewDropProductList({ filterData }) {
  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();

  const {
    state: { wishListItems },
    wishListContextDispatch,
} = useWishListContextProvider();

  const {
    homeScreenProductDispatch,
    state: { initialHomeScrrenProducts },
  } = useMensNewProductListsContext();

  useEffect(() => {
    makeAnAPICall("GET","/api/products/mensNewDrops",homeScreenProductDispatch,"LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS" )
  }, []);


  return (
    <div className="grid-container">
      {filterData(initialHomeScrrenProducts).map((ele) => (
        <div className="card-container" key={ele.id}>
          <div className="card-container-header">
            <NavLink to={`/products/${ele.id}`}>
              <img src={ele.images[0].img} alt="" />
            </NavLink>
            {/* calling the program so that it  automatiaaly renders ADD to cart button or increase the qty buttons */}
            {checkIfTheProductIsInCart(ele,cartItems,cartContextDispatch)}
          </div>
          <div className="card-container-footer">
        
              <div className="card-container-footer-row-one">
                <span>New</span>
                <h4>{ele.price}.00₹</h4>
              </div>
              <div className="card-container-footer-row-two">
              <NavLink to={`/products/${ele.id}`}>   <h2>{ele.name}</h2>    </NavLink>
                <div className="card-container-footer-row-three">
                  <p>{ele.color}</p>
                  <i
                    class="fas fa-heart wish-heart-icon "
                    style={checkIfTheProductIsWished(ele,wishListItems)}
                    onClick={() => dispatchBasedOnBroductWishedOrNot(ele,wishListItems,wishListContextDispatch)}
                  >
                    {" "}
                  </i>
                </div>
              </div>
        
          </div>
        </div>
      ))}
    </div>
  );
}

export default MensNewDropProductList;
