const { createContext, useContext, useReducer } = require("react");

const loginRegistrationContext = createContext();

const initialState = {
    userInfo:localStorage.getItem("user_info") ? JSON.parse(localStorage.getItem("user_info")) : [],
    isAuthenticated: false,
    loading:true
}
const loginContextReuducerFun = (state, { type, payload })=>
{
    switch (type) {
        case "USER_LOGGED_SUCCESSFULL":
        case "USER_REGISTER_SUCCESSFULL":
            localStorage.setItem("user_info",JSON.stringify(payload))
            return {
                ...state,
                userInfo: payload,
                isAuthenticated: true,
                loading:false
            }
        case "USER_LOGGED_FAIL":
        case "USER_REGISTER_FAIL":
        case "USER_LOGOUT":
            return {
                ...state,
                userInfo: [],
                isAuthenticated: false,
                loading:false,
            }
       
    
        default:
           return state
    }
}


export const LoginContextFun = ({ children }) => {
    const [state, dispatch] = useReducer(loginContextReuducerFun, initialState)
  return (
    <loginRegistrationContext.Provider value={{state,authDispatch:dispatch}}>
      {children}
    </loginRegistrationContext.Provider>
  );
};

export const useLoginContext = () => useContext(loginRegistrationContext);
