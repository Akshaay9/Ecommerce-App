import { makeAnAPICall } from "./APiCalls";

export const addToCartHandlerBasedOnLogin = async (
  id,
  userinfo,
  setSHowModal,
  dispatch,
  dispatchType,
  toastDispatch,
  msg,
  setLoader
) => {
 
  if (userinfo.token == null && setSHowModal) {
    setSHowModal(true);
  } else {
    if (setLoader)
    {
       setLoader(true)
      }
    await makeAnAPICall(
      `POST`,
      `http://localhost:5000/api/cart/${id}`,
      dispatch,
      dispatchType,
      null,
      userinfo.token,
      toastDispatch,
      msg,
      setLoader
    );
  }
};
export const manageQTY = async (
  id,
  userinfo,
  dispatch,
  dispatchType,
  dataToBeDispatched,
  toastDispatch,
  msg,
  setLoader,
) => {
  if (setLoader != null) {
    setLoader(true);
  }

  await makeAnAPICall(
    `POST`,
    `http://localhost:5000/api/cart/${id}`,
    dispatch,
    dispatchType,
    dataToBeDispatched,
    userinfo.token,
    toastDispatch,
    msg,
    setLoader
  );
};
export const deleteItem = async (
  id,
  userinfo,
  dispatch,
  dispatchType,
  toastDispatch,
  msg,
  setLoader
) => {
  if (setLoader)
  {
     setLoader(true)
    }

  await makeAnAPICall(
    `DELETE`,
    `http://localhost:5000/api/cart/${id}`,
    dispatch,
    dispatchType,
    null,
    userinfo.token,
    toastDispatch,
    msg,
    setLoader
  );
};
