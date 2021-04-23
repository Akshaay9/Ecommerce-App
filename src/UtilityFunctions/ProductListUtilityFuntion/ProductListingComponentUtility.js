import React from "react";
import {
  checkIfTheProductIsInCart,
  checkIfTheProductIsWished,
  dispatchBasedOnBroductWishedOrNot,
} from "./ProductListingFunctionsUtility";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";
import { NavLink } from "react-router-dom";
import { useToastContext } from "../../Contexts/ToastContext/ToastContext";
import { filterData } from "../Filter/FilterFunctions";

function ProductListingComponentUtility({ products, filterItems }) {
  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();

  const {
    state: { wishListItems },
    wishListContextDispatch,
  } = useWishListContextProvider();

  const { toastDispatch } = useToastContext();

  return (
    <div className="grid-container">
      {filterData(products, filterItems).map((ele) => (
        <div className="card-container" key={ele._id}>
          <div className="card-container-header">
            <NavLink to={`/products/${ele._id}`}>
              <img src={ele.images[0].img} alt="" />
              {ele.newArrival && <span className="cardBadge">New Arrival</span>}
            </NavLink>
            {/* calling the program so that it  automatiaaly renders ADD to cart button or increase the qty buttons */}
            {checkIfTheProductIsInCart(
              ele,
              cartItems,
              cartContextDispatch,
              toastDispatch
            )}
          </div>
          <div className="card-container-footer">
            <div className="card-container-footer-row-one">
              <span>New</span>
              <h4>{ele.price}.00₹</h4>
            </div>
            <div className="card-container-footer-row-two">
              <NavLink to={`/products/${ele._id}`}>
                {" "}
                <h2>{ele.name}</h2>{" "}
              </NavLink>
              <div className="card-container-footer-row-three">
                <p>{ele.color}</p>
                <i
                  className="fas fa-heart wish-heart-icon "
                  style={checkIfTheProductIsWished(ele, wishListItems)}
                  onClick={() =>
                    dispatchBasedOnBroductWishedOrNot(
                      ele,
                      wishListItems,
                      wishListContextDispatch
                    )
                  }
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

export default ProductListingComponentUtility;
