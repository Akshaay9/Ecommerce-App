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
          console.log(dataToBeDispatched);
          const data = await axios.get(url, dataToBeDispatched, config);
          console.log(data);
        // if (!dispatch) {
        //   return data;
        // }
        // dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error);
      }
    case "POST":
      console.log(dataToBeDispatched, "111");
      try {
        const data = await axios.post(url, dataToBeDispatched, config);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    default:
      break;
  }
};
