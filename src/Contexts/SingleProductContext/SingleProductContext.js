import { createContext, useContext, useReducer } from "react";

const singleProductContextProvider = createContext()

const initalState = {
    singleProduct: [
       
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