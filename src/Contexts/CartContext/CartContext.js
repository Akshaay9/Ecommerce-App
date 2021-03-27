import { createContext, useContext, useReducer } from "react";
import { cartContextReducerFun } from "./CartContextReducer";
import { v4 as uuidv4 } from "uuid";

export const cartContextProvider = createContext();

const initialStateOfCart = {
  cartItems: localStorage.getItem("cart-itmes")
    ? JSON.parse(localStorage.getItem("cart-items"))
    : [
        {
          id: uuidv4(),
          name: "ESSENTIAL OVERSIZED T-SHIRT",
          tag: "t-shirt",
          price: 250,
          color: "Light Green",
          images: [
            {
              img1:
                "https://cdn.shopify.com/s/files/1/1367/5207/products/OVERSIZEDESSENTIALSST-SHIRTSAGEGREEN.D1-Edit_BK_438x.jpg?v=1615305736",
            },
            {
              img2:
                "https://cdn.shopify.com/s/files/1/1367/5207/products/OVERSIZEDESSENTIALSST-SHIRTSAGEGREEN.C-Edit_BK_290x.jpg?v=1615148613",
            },
            {
              img3:
                "https://cdn.shopify.com/s/files/1/1367/5207/products/OVERSIZEDESSENTIALSST-SHIRTSAGEGREEN.B-Edit_BK_290x.jpg?v=1615148613",
            },
          ],
          desc:
            "An unquestionable essential, the Oversized Tee does exactly what it says on the tin. With an oversized fit, and available in a range of colours available, it's a must-have for any, and every, gym bag.",
          inStock: 7,
          rating: 4.5,
          freeDelivery: true,
          deliveredBy: 7,
          newArrival: true,
        },
      ],
  loading: false,
};

export const CartContextFunction = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartContextReducerFun,
    initialStateOfCart
  );

  return (
    <cartContextProvider.Provider
      value={{ state, cartContextDispatch: dispatch }}
    >
      {children}
    </cartContextProvider.Provider>
  );
};
export const useCartContextProvider = () => {
  return useContext(cartContextProvider);
};
