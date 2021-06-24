import React, { useState } from "react";
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
import LoginModal from "../../Components/LoginModal/LoginModal";
import { useLoginContext } from "../../Contexts/loginRegistrationContext/loginRegistrationContext";

function ProductListingComponentUtility({
  products,
  filterItems,
  imgaeheight,
}) {
  const [showModal, setSHowModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ButtonId, setButtonId] = useState(null);

  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();

  const {
    state: { wishListItems },
    wishListContextDispatch,
  } = useWishListContextProvider();

  const {
    state: { userInfo },
  } = useLoginContext();

  const { toastDispatch } = useToastContext();

  return (
    <>
      {showModal && <LoginModal setSHowModal={setSHowModal} />}
      <div className="grid-container">
        {filterData(products, filterItems).map((ele, index) => (
          <div className="card-container" key={ele._id}>
            <div className={`card-container-header ${imgaeheight}`}>
              <NavLink to={`/products/${ele._id}`}>
                <img src={ele.images[0].img} alt="" />
                {ele.newArrival && (
                  <span className="cardBadge">New Arrival</span>
                )}
              </NavLink>
              {/* calling the program so that it  automatiaaly renders ADD to cart button or increase the qty buttons */}
              {checkIfTheProductIsInCart(
                ele,
                cartItems,
                cartContextDispatch,
                toastDispatch,
                setSHowModal,
                userInfo,
                loader,
                setLoader,
                index,
                ButtonId,
                setButtonId
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
                    className="wishID-icon"
                    onClick={(e) => {
                      setButtonId(e.target.id * 1);
                      dispatchBasedOnBroductWishedOrNot(
                        ele,
                        wishListItems,
                        wishListContextDispatch,
                        toastDispatch,
                        setSHowModal,
                        userInfo,
                        setLoader
                      );
                    }}
                  >
                    {loader &&
                    ButtonId !== null &&
                    index * 1 + 300 == ButtonId ? (
                      <i class="fas fa-spinner fa-spin wish-spin"></i>
                    ) : (
                      <i
                        className="fas fa-heart wish-heart-icon "
                        id={index * 1 + 300}
                        style={checkIfTheProductIsWished(ele, wishListItems)}
                      ></i>
                    )}
                  </i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductListingComponentUtility;
