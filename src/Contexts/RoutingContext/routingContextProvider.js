const { createContext, useState, useContext } = require("react");

export const RoutingContext = createContext()
export default function RoutingContextFunction({ children }) {
    
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