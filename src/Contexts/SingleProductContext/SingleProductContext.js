import { createContext, useContext, useReducer } from "react";

const singleProductContextProvider = createContext()

const initalState = {
    singleProduct: [
        {
            id: 1,
            name: "ESSENTIAL OVERSIZED T-SHIRT",
            tag: "t-shirt",
            price: 250,
            color: "Light Green",
            images: [
              {
                img:
                  "https://cdn.shopify.com/s/files/1/1367/5207/products/OVERSIZEDESSENTIALSST-SHIRTSAGEGREEN.D1-Edit_BK_438x.jpg?v=1615305736",
              },
              {
                img:
                  "https://cdn.shopify.com/s/files/1/1367/5207/products/OVERSIZEDESSENTIALSST-SHIRTSAGEGREEN.C-Edit_BK_290x.jpg?v=1615148613",
              },
              {
                img:
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
    ]
}

const singleProductReducerFun = (state,{type,payload}) => {
    switch (type) {
        case "ADD_TO_SINGLE_PRODUCT":
            return {
                singleProduct:[payload]
      }
    
        default:
           return state
    }
}

export const SinglePRoductContextFun = ({ children }) => {
    
    const[state,dispatch]=useReducer(singleProductReducerFun,initalState)
    return (
        <singleProductContextProvider.Provider value={{state,singleProductContextDispatch:dispatch}}>
            {children}
            </singleProductContextProvider.Provider>
    )
}
export const useSingleProductCOntextFun = () => {
    return useContext(singleProductContextProvider)
}