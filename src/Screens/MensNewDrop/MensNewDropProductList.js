import axios from "axios";
import React, { useEffect } from "react";
import { useCartContextProvider } from "../../Contexts/CartContext/CartContext";
import { useMensNewProductListsContext } from "../../Contexts/ProductListContext/MensNewDropProductListing";
function MensNewDropProductList({newFilteredList}) {
  const {
    state: { initialHomeScrrenProducts, loading },
    homeScreenProductDispatch,
  } = useMensNewProductListsContext();
  const { state: { cartItems },cartContextDispatch} = useCartContextProvider();

  useEffect(() => {
    (async () => {
      const data = await axios.get("/api/products/mensNewDrop");
      homeScreenProductDispatch({
        type: "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS",
        payload: data.data.products,
      });
    })();
  }, []);

  const checkIfTheProductIsInCart = (product) => {
    const newItems = [...cartItems];
    const isItemOnTheCart = newItems.filter((ele) => ele.id == product.id);
    if (isItemOnTheCart.length > 0) {
      return (
        <div className="card-add-to-cart-action">
          {" "}
          <h3>{ isItemOnTheCart[0].inCartQty===isItemOnTheCart[0].inStock?<span style={{color:"red"}}>Out Of Stock</span>:"Quick Add"}</h3>{" "}
          <div className="card-ad-to-cart-action-qty">
            {" "}
            <button
              className="btn-secondary btn-secondary-hr-outline-in"
              onClick={() => isItemOnTheCart[0].inCartQty==1 ?cartContextDispatch({ type: "REMOVE_FROM_CART", payload: product }):   cartContextDispatch({ type: "DECREASE_QTY", payload: product })}
              
              // onClick={() =>
              //   cartContextDispatch({ type: "DECREASE_QTY", payload: product })
              // }
            >
              <span>-</span>
            </button>{" "}
            {isItemOnTheCart[0].inCartQty}{" "}
            <button
              disabled={isItemOnTheCart[0].inCartQty===isItemOnTheCart[0].inStock}
              className="btn-secondary btn-secondary-hr-outline-in secondary-disabled"
              onClick={() =>
                cartContextDispatch({ type: "INCREASE_QTY", payload: product })
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
              cartContextDispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            Add To Cart
          </button>
        </div>
      );
  };

  return (
    <div className="grid-container">
      {newFilteredList.map((ele) => (
        <div className="card-container" key={ele.id}>
          <div className="card-container-header">
            <img src={ele.images[0].img1} alt="" />
            {/* calling the program so that it  automatiaaly renders ADD to cart button or increase the qty buttons */}
            {checkIfTheProductIsInCart(ele)}
            
          </div>
          <div className="card-container-footer">
            <div className="card-container-footer-row-one">
              <span>New</span>
              <h4>{ele.price}.00₹</h4>
            </div>
            <div className="card-container-footer-row-two">
              <h2>{ele.name}</h2>
              <p>{ele.color}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MensNewDropProductList;