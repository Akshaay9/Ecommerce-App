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
    },
  };
  switch (request) {
    case "GET":
          try {
          const data = await axios.get(url);
        if (!dispatch) {
          return data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error);
      }
    case "POST":
      try {
       
        const data = await axios.post(url, dataToBeDispatched, config);
        dispatch({ type: dispatchType, payload: data.data });

        if (!dispatch || !dispatchType ) {
          return data.data
        }

      } catch (error) {
        const errors = error.response.data.errors ?error.response.data.errors:error.response.data
        console.log(errors);
      }
    default:
      break;
  }
};
