import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { debugContextDevtool } from 'react-context-devtool';
import { CartContextFunction } from "./Contexts/CartContext/CartContext";
import { MensNewDropProductListsFunction } from "./Contexts/ProductListContext/MensNewDropProductListing";
import RoutingContextFunction from "./Contexts/RoutingContext/routingContextProvider";
import { SinglePRoductContextFun } from "./Contexts/SingleProductContext/SingleProductContext";
import { WishListContextFun } from "./Contexts/WishListContext/WishListContext";
import { WomensNewDropProductListsFunction } from "./Contexts/ProductListContext/WomensNewDropProductListing";

const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MensNewDropProductListsFunction>
      {/* for Mens New Drop products Listing */}

      <WomensNewDropProductListsFunction>
         {/* for womens New Drop products Listing */}

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
        </WomensNewDropProductListsFunction>
    </MensNewDropProductListsFunction>
  </React.StrictMode>,
 container
);
debugContextDevtool(container);
