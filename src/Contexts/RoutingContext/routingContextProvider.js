const { createContext, useState, useContext } = require("react");

export const RoutingContext = createContext()
export default function RoutingContextProvider({ children }) {
    
    const [route, setRoute] = useState("HomeScreenComponents")
    
    return (
        <RoutingContext.Provider value={{route,setRoute}}  >
            {children}
        </RoutingContext.Provider>
    )
}

export const useRoutingContext = () => {
    return useContext(RoutingContext)
}