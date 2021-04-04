import axios from 'axios';
import React, { useEffect } from 'react'
import { useCartContextProvider } from '../../Contexts/CartContext/CartContext';
import { useResistanceProductListsContext } from '../../Contexts/ProductListContext/ResistanceTrainingProductListing';
import { useRoutingContext } from '../../Contexts/RoutingContext/routingContextProvider';
import { useSingleProductCOntextFun } from '../../Contexts/SingleProductContext/SingleProductContext';
import { useWishListContextProvider } from '../../Contexts/WishListContext/WishListContext';

function ResistanceTrainingProductList({filterData}) {

  // single product view
  const {  singleProductContextDispatch } = useSingleProductCOntextFun()
  // routing
  const { setRoute } = useRoutingContext();
 // grabbing context API
 const {
    state: { initialResistanceProducts, loading, filterItems },
    ResistanceProductDispatch,
  } = useResistanceProductListsContext();
  const {
    state: { cartItems },
    cartContextDispatch,
  } = useCartContextProvider();

  const {
    state: { wishListItems },wishListContextDispatch
  } = useWishListContextProvider();

  useEffect(() => {
    (async () => {
      try {
          const data = await axios.get("/api3/products/resistanceEquipments");
          ResistanceProductDispatch({
          type: "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS",
          payload: data.data.products,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const checkIfTheProductIsInCart = (product) => {
    const newItems = [...cartItems];
    const isItemOnTheCart = newItems.filter((ele) => ele.id == product.id);
    if (isItemOnTheCart.length > 0) {
      return (
        <div className="card-add-to-cart-action">
          {" "}
          <h3>
            {isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock ? (
              <span style={{ color: "red" }}>Out Of Stock</span>
            ) : (
              "Quick Add"
            )}
          </h3>{" "}
          <div className="card-ad-to-cart-action-qty">
            {" "}
            <button
              className="btn-secondary btn-secondary-hr-outline-in"
              onClick={() =>
                isItemOnTheCart[0].inCartQty == 1
                  ? cartContextDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product,
                    })
                  : cartContextDispatch({
                      type: "DECREASE_QTY",
                      payload: product,
                    })
              }
            >
              <span>-</span>
            </button>{" "}
            {isItemOnTheCart[0].inCartQty}{" "}
            <button
              disabled={
                isItemOnTheCart[0].inCartQty === isItemOnTheCart[0].inStock
              }
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

  const checkIfTheProductIsWished = (ele) => {
    console.log(wishListItems);
    const isItemsWished = wishListItems.filter((prod) => prod.id == ele.id);
    let heartColor;
    if (isItemsWished.length > 0) {
     return heartColor = {
        color: "red",
      };
    } else {
     return heartColor = {
        color: " rgb(172, 161, 161)",
      };
    }
  };
  const dispatchBasedOnBroductWishedOrNot = (ele) => {
    const isItemsWished = wishListItems.filter((prod) => prod.id == ele.id);
    if (isItemsWished.length ==0) {
      wishListContextDispatch({type:"ADD_TO_WISHLIST",payload:ele})
    }
    else {
      wishListContextDispatch({type:"REMOVE_FROM_WISHLIST",payload:ele})
    } 
  }
  const setRouteToSingleProductAndDispatchSingleProductContext = (ele) => {
    setRoute("singleProductView")
    singleProductContextDispatch({type:"ADD_TO_SINGLE_PRODUCT",payload:ele})
    
  }
  return (
    <div className="grid-container">
      {filterData(initialResistanceProducts).map((ele) => (
        <div className="card-container" key={ele.id}>
          <div className="card-container-header">
            <img src={ele.images[0].img} alt=""  onClick={()=>setRouteToSingleProductAndDispatchSingleProductContext(ele)}/>
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

              <div className="card-container-footer-row-three">
                <p>{ele.color}</p>
                <i
                  class="fas fa-heart wish-heart-icon "
                  style={checkIfTheProductIsWished(ele)}
                  onClick={()=>dispatchBasedOnBroductWishedOrNot(ele)}
                > </i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) 
}

export default ResistanceTrainingProductList;

