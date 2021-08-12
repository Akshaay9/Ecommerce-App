import { createContext, useContext, useReducer } from "react";

const addRessContext = createContext();

const initialState = {
  userAddress: [],
};
const addressReducerFun = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_ADDRESS":
      return {
        userAddress: payload,
      };
    case "CLEAR_ADDRESS":
      return {
        userAddress: [],
      };

    default:
      break;
  }
};

export const AddressContextFun = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducerFun, initialState);
  return (
    <addRessContext.Provider value={{ state, addressDispatch: dispatch }}>
      {children}
    </addRessContext.Provider>
  );
};
export const useAddressContext = () => useContext(addRessContext);
// export const userAddressContext = () => useContext(addRessContext);
