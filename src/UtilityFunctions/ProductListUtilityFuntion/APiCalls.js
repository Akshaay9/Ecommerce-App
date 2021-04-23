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
      console.log("delete request");
      try {
        const data = await axios.delete(url, config);
        dispatch({ type: dispatchType, payload: data.data });
      
        if (!dispatch || !dispatchType) {
          return data.data;
        }
      } catch (error) {
        const errors = error.response.data.errors
          ? error.response.data.errors
          : error.response.data;
        console.log(errors);
      }
    case "GET":
      try {
        const data = await axios.get(url, config);
        console.log(data.data);
        if (!dispatch) {
          return data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error);
      }
    case "POST":
      console.log(url);
      try {
        const data = await axios.post(url, dataToBeDispatched, config);
        dispatch({ type: dispatchType, payload: data.data });
      
        if (!dispatch || !dispatchType) {
          return data.data;
        }
      } catch (error) {
        const errors = error.response.data.errors
          ? error.response.data.errors
          : error.response.data;
        console.log(errors);
      }


    default:
      break;
  }
};
