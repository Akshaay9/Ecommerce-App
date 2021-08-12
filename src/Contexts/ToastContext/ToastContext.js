import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
const toastCOntext = createContext()

const initialState = {
    toast:[]
}
const toastReducerFun = (state, { type, payload }) => {
    switch (type) {
        case "SET_ALERT":
            return {
                toast:[...state.toast,payload]
            }
           case "REMOVE_ALERT":
            return {
                toast:state.toast.filter((ele)=>ele.id*1==payload)
            }
        default:
          return state
    }
}

export const ToastConTextFun = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducerFun, initialState)
    
    return (
        <toastCOntext.Provider value={{state,toastDispatch:dispatch}}>
            {children}
            </toastCOntext.Provider>
    )
}
export const useToastContext=()=>useContext(toastCOntext)