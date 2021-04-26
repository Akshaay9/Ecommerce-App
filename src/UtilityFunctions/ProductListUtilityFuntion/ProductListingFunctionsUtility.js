import {
  addToCartHandlerBasedOnLogin,
  deleteItem,
  manageQTY,
} from "./CartApiCalls";
import {
  addToWishHandlerBasedOnLogin,
  removeFromWishList,
} from "./WishListAPICalls";

export const checkIfTheProductIsInCart = (
  product,
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
) => {
  const newItems = [...cartItems];
  const isItemOnTheCart = newItems.filter(
    (ele) => ele.productID._id == product._id
  );

  if (isItemOnTheCart.length > 0) {
    return (
      <div className="card-add-to-cart-action">
        {" "}
        <h3>
          {isItemOnTheCart[0].inCartQty ===
          isItemOnTheCart[0].productID.inStock ? (
            <span style={{ color: "red" }}>Out Of Stock</span>
          ) : (
            "Quick Add"
          )}
        </h3>{" "}
        <div className="card-ad-to-cart-action-qty">
          {" "}
          <button
            className="btn-secondary btn-secondary-hr-outline-in secondary-disabled"
            id={index}
            disabled={loader && index * 1 + 200 == ButtonId}
            onClick={(e) => {
              setButtonId(e.target.id * 1 + 200);
              isItemOnTheCart[0].inCartQty == 1
                ? deleteItem(
                    product._id,
                    userInfo,
                    cartContextDispatch,
                    "LOAD_CART_ITEMS",
                    toastDispatch,
                    "Product removed from cart",
                    setLoader
                  )
                : manageQTY(
                    product._id,
                    userInfo,
                    cartContextDispatch,
                    "LOAD_CART_ITEMS",

                    {
                      inCartQty: isItemOnTheCart[0].inCartQty - 1,
                    },

                    toastDispatch,
                    "Product quantity decreased",
                    setLoader
                  );
            }}
          >
            {console.log(loader)}
            {loader && ButtonId !== null && index + 200 == ButtonId ? (
              <i class="fas fa-spinner fa-spin btn-spin"></i>
            ) : (
             "-"
            )}
          </button>{" "}
          {isItemOnTheCart[0].inCartQty}
          <button
            disabled={
              isItemOnTheCart[0].inCartQty ===
                isItemOnTheCart[0].productID.inStock ||
              (loader && index * 1 == ButtonId)
            }
            className="btn-secondary btn-secondary-hr-outline-in secondary-disabled"
            id={index}
            onClick={(e) => {
              setButtonId(e.target.id);
              manageQTY(
                product._id,
                userInfo,
                cartContextDispatch,
                "LOAD_CART_ITEMS",
                {
                  inCartQty: isItemOnTheCart[0].inCartQty + 1,
                },

                toastDispatch,
                "Product quantity increased",
                setLoader
              );
            }}
          >
            {loader && ButtonId !== null && index == ButtonId ? (
              <i class="fas fa-spinner fa-spin btn-spin"></i>
            ) : (
              "+"
            )}
          </button>{" "}
        </div>{" "}
      </div>
    );
  } else
    return (
      <div className="card-add-to-cart-action">
        <h3>Quick ADD</h3>
        <button
          className="btn-primary btn-primary-hr-outline-out  blue-btn-disable"
          id={index}
          disabled={loader && index * 1 == ButtonId}
          onClick={(e) => {
            setButtonId(e.target.id);
            addToCartHandlerBasedOnLogin(
              product._id,
              userInfo,
              setSHowModal,
              cartContextDispatch,
              "LOAD_CART_ITEMS",
              toastDispatch,
              "Product added to Cart",
              setLoader
            );
          }}
        >
      
          {loader && ButtonId !== null && index == ButtonId ? (
            <i class="fas fa-spinner fa-spin login-spin"></i>
          ) : (
            "Add To Cart"
          )}
        </button>
      </div>
    );
};

// fun 2

export const checkIfTheProductIsWished = (ele, wishListItems) => {
  const isItemsWished = wishListItems.filter(
    (prod) => prod.productID._id == ele._id
  );
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
// fun3

export const dispatchBasedOnBroductWishedOrNot = async (
  ele,
  wishListItems,
  wishListContextDispatch,
  toastDispatch,
  setSHowModal,
  userInfo,
  setLoader
) => {
  const isItemsWished = wishListItems.filter(
    (prod) => prod.productID._id == ele._id
  );
  if (isItemsWished.length == 0) {
    addToWishHandlerBasedOnLogin(
      ele._id,
      userInfo,
      setSHowModal,
      wishListContextDispatch,
      "LOAD_WISHLIST",
      toastDispatch,
      "Product added to wishlist",
      setLoader
    );
  } else {
    await removeFromWishList(
      ele._id,
      userInfo,
      wishListContextDispatch,
      "LOAD_WISHLIST",
      toastDispatch,
      "Product removed from wishlist",
      setLoader
    );
  }
};
