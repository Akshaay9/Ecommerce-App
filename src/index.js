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
        

              <CartContextFunction>
                {/* {Cart Context} */}

                <WishListContextFun>
                  {/* {WishList Context} */}

                
                  
                      <App />
                    
               
                </WishListContextFun>
              </CartContextFunction>
         
          </ResistanceProductListsFunction>
        </HomeWorkoutProductListsFunction>
      </WomensNewDropProductListsFunction>
    </MensNewDropProductListsFunction>
  </React.StrictMode>,
  container
);
debugContextDevtool(container);
