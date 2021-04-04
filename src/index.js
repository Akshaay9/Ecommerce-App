import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { debugContextDevtool } from "react-context-devtool";
import { CartContextFunction } from "./Contexts/CartContext/CartContext";
import { MensNewDropProductListsFunction } from "./Contexts/ProductListContext/MensNewDropProductListing";
import { WishListContextFun } from "./Contexts/WishListContext/WishListContext";
import { WomensNewDropProductListsFunction } from "./Contexts/ProductListContext/WomensNewDropProductListing";
import { HomeWorkoutProductListsFunction } from "./Contexts/ProductListContext/HomeWorkoutProductListing";
import { ResistanceProductListsFunction } from "./Contexts/ProductListContext/ResistanceTrainingProductListing";
import { YogaProductListsFunction } from "./Contexts/ProductListContext/YogaEquipmentLists";
import { GymAccessoriesFunction } from "./Contexts/ProductListContext/GymAccessories";

const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MensNewDropProductListsFunction>
      {/* for Mens New Drop products Listing */}

      <WomensNewDropProductListsFunction>
        {/* for womens New Drop products Listing */}
        <HomeWorkoutProductListsFunction>
          {/* {Home Workout} */}

          <ResistanceProductListsFunction>
            {/* {For resiatnce equipments} */}

            <YogaProductListsFunction>
              {/* Yoga Products */}

              <GymAccessoriesFunction>
            {/* </gym accesories product> */}
                
                <CartContextFunction>
                  {/* {Cart Context} */}

                  <WishListContextFun>
                    {/* {WishList Context} */}

                    <App />
                  </WishListContextFun>
                </CartContextFunction>
              </GymAccessoriesFunction>
            </YogaProductListsFunction>
          </ResistanceProductListsFunction>
        </HomeWorkoutProductListsFunction>
      </WomensNewDropProductListsFunction>
    </MensNewDropProductListsFunction>
  </React.StrictMode>,
  container
);
debugContextDevtool(container);
