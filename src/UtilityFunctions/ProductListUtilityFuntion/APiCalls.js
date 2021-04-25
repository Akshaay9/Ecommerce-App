import axios from "axios";
import { setAlert } from "../../Contexts/ToastContext/ToastAction";
export const makeAnAPICall = async (
  request,
  url,
  dispatch,
  dispatchType,
  dataToBeDispatched,
  token,
  dispatch1,
  msg
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
        if (dispatch != null && msg != null) {
          setAlert(msg, "danger", dispatch1);
        }
        if (!dispatch || !dispatchType) {
          return data.data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error.response);
        if (dispatch1 != null) {
          setAlert(error.response.data.error, "danger", dispatch1);
        }
      }
      return;
    case "GET":
      try {
        const data = await axios.get(url, config);
        if (dispatch != null && msg != null) {
          setAlert(msg, "success", dispatch1);
        }
        if (!dispatch) {
          return data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error.response);

        if (dispatch1 != null) {
          setAlert(error.response.data.error, "danger", dispatch1);
        }
      }
      return;
    case "POST":
      console.log(dispatch1, msg);
      try {
        const data = await axios.post(url, dataToBeDispatched, config);
        if (dispatch1) {
          setAlert(msg, "success", dispatch1);
        }

        if (!dispatch || !dispatchType) {
          return data.data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error);
        if (dispatch1 != null) {
          setAlert(error.response.data.error, "danger", dispatch1);
        }
      }
      return;
    default:
      return;
  }
};
