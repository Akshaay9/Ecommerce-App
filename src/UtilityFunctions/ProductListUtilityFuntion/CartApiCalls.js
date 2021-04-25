import { makeAnAPICall } from "./APiCalls";

export const addToCartHandlerBasedOnLogin = async (
  id,
  userinfo,
  setSHowModal,
  dispatch,
  dispatchType
) => {
  if (userinfo.token == null) {
    setSHowModal(true);
  } else {
    await makeAnAPICall(
      `POST`,
      `http://localhost:5000/api/cart/${id}`,
      dispatch,
      dispatchType,
      null,
      userinfo.token
    );
  }
};
export const manageQTY = async (
  id,
  userinfo,
  dispatch,
  dispatchType,
  dataToBeDispatched
) => {
  await makeAnAPICall(
    `POST`,
    `http://localhost:5000/api/cart/${id}`,
    dispatch,
    dispatchType,
    dataToBeDispatched,
    userinfo.token
  );
};
export const deleteItem = async (id, userinfo, dispatch, dispatchType) => {
  await makeAnAPICall(
    `DELETE`,
    `http://localhost:5000/api/cart/${id}`,
    dispatch,
    dispatchType,
    null,
    userinfo.token
  );
};
