import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartContextFunction } from "./Contexts/CartContext/CartContext";
import { MensNewDropProductListsFunction } from "./Contexts/ProductListContext/MensNewDropProductListing";
import RoutingContextFunction from "./Contexts/RoutingContext/routingContextProvider";
import { SinglePRoductContextFun } from "./Contexts/SingleProductContext/SingleProductContext";
import { WishListContextFun } from "./Contexts/WishListContext/WishListContext";

ReactDOM.render(
  <React.StrictMode>
    <MensNewDropProductListsFunction>
      {/* for Mens New Drop products Listing */}

      <RoutingContextFunction>
        {/* for routing */}

        <CartContextFunction>
          {/* {Cart Context} */}

          <WishListContextFun>
            {/* {WishList Context} */}

            <SinglePRoductContextFun>
              {/* {Single Product View COntext} */}

              <App />
              </SinglePRoductContextFun>
          </WishListContextFun>
        </CartContextFunction>
      </RoutingContextFunction>
    </MensNewDropProductListsFunction>
  </React.StrictMode>,
  document.getElementById("root")
);
