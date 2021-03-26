import axios from "axios";
import React, { useEffect } from "react";
import { useMensNewProductListsContext } from "../../Contexts/ProductListContext/MensNewDropProductListing";
function MensNewDropProductList() {
  const { state, dispatch } = useMensNewProductListsContext();
  const { initialHomeScrrenProducts, loading } = state;
  useEffect(() => {
    (async () => {
      const data = await axios.get("/api/products/mensNewDrop");
      dispatch({
        type: "LOAD_MENS_NEW_DROP_SCREEN_PRODUCTS",
        payload: data.data.products,
      });
    })();
  }, []);
  return (
    <div className="grid-container">
      {initialHomeScrrenProducts.map((ele) => (
        <div className="card-container" key={ele.id}>
          <div className="card-container-header">
                  <img src={ele.images[0].img1} alt="" />
                  <div className="card-add-to-cart-action">
                      <h3>Quick ADD</h3>
                      <button className="btn-primary btn-primary-hr-outline-out">Add To Cart</button>
                  </div>
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
