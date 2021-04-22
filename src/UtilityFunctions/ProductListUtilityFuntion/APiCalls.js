import  axios from "axios";

export const makeAnAPICall = async (request,url,dispatch,dispatchType) => {
    switch (request) {
        case "GET":
            try {
                const data = await axios.get(url)
                dispatch({ type: dispatchType, payload:data.data })
            } catch (error) {
               console.log(error); 
            }
         
        default:
            break;
    }
} 