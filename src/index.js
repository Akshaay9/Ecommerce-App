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
import { AllProductsContextFun } from "./Contexts/SearchAndIndividualScreenContext/SearchAndindiScreen";
import { ProductsFunction } from "./Contexts/ProductListContext/Products";
import { ToastConTextFun } from "./Contexts/ToastContext/ToastContext";
import { LoginContextFun } from "./Contexts/loginRegistrationContext/loginRegistrationContext";
import { AddressContextFun } from "./Contexts/AddressContext/AddressContext";

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
                <ProductsFunction>
                  {/* products category */}

                  <CartContextFunction>
                    {/* {Cart Context} */}

                    <WishListContextFun>
                      {/* {WishList Context} */}

                      <AllProductsContextFun>
                        {/* All products for search and single view */}

                        <ToastConTextFun>
                          {/* Toast */}

                          <LoginContextFun>
                            {/* {Login context} */}

                            <AddressContextFun>
                              {/* {Address COntext} */}


                              <App />
                            </AddressContextFun>
                          </LoginContextFun>
                        </ToastConTextFun>
                      </AllProductsContextFun>
                    </WishListContextFun>
                  </CartContextFunction>
                </ProductsFunction>
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
