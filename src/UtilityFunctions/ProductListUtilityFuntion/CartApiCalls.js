import { makeAnAPICall } from "./APiCalls";

export const addToCartHandlerBasedOnLogin = async (
  id,
  userinfo,
  setSHowModal,
  dispatch,
  dispatchType,
  toastDispatch,
  msg
) => {
  console.log(toastDispatch);
  if (userinfo.token == null) {
    setSHowModal(true);
  } else {
    await makeAnAPICall(
      `POST`,
      `http://localhost:5000/api/cart/${id}`,
      dispatch,
      dispatchType,
      null,
      userinfo.token,
      toastDispatch,
  msg
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
  msg
) => {
  await makeAnAPICall(
    `POST`,
    `http://localhost:5000/api/cart/${id}`,
    dispatch,
    dispatchType,
    dataToBeDispatched,
    userinfo.token,
    toastDispatch,
  msg
  );
};
export const deleteItem = async (id, userinfo, dispatch, dispatchType, toastDispatch,
  msg) => {
  await makeAnAPICall(
    `DELETE`,
    `http://localhost:5000/api/cart/${id}`,
    dispatch,
    dispatchType,
    null,
    userinfo.token,
    toastDispatch,
  msg
  );
};
