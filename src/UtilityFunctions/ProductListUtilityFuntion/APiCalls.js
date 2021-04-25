import axios from "axios";

export const makeAnAPICall = async (
  request,
  url,
  dispatch,
  dispatchType,
  dataToBeDispatched,
  token
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  };
  switch (request) {
    case "DELETE":
      try {
        const data = await axios.delete(url, config);
        console.log(data);
        if (!dispatch || !dispatchType) {
          return data.data;
        }
        dispatch({ type: dispatchType, payload: data.data });

      
      } catch (error) {
        // const errors = error.response.data.errors
        //   ? error.response.data.errors
        //   : error.response.data;
        console.log(error);
      }
      return;
    case "GET":
      try {
        const data = await axios.get(url, config);
        if (!dispatch) {
          return data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error);
      }
      return;
    case "POST":
      try {
        const data = await axios.post(url, dataToBeDispatched, config);
       
        if (!dispatch || !dispatchType) {
          return data.data;
        }
        dispatch({ type: dispatchType, payload: data.data });
       
      } catch (error) {
        // const errors = error.response.data.errors
        //   ? error.response.data.errors
        //   : error.response.data;
        console.log(error);
        console.log(error.response);
      }
      return;
    default:
      return;
  }
};
