import { makeAnAPICall } from "./APiCalls";

export const addToWishHandlerBasedOnLogin = async (
  id,
  userinfo,
  setSHowModal,
  dispatch,
  dispatchType,
  toastDispatch,
  msg
) => {
  if (userinfo.token == null) {
    setSHowModal(true);
  } else {
    await makeAnAPICall(
      `POST`,
      `http://localhost:5000/api/wishlist/${id}`,
      dispatch,
      dispatchType,
      null,
      userinfo.token,
      toastDispatch,
      msg
    );
  }
};
export const removeFromWishList = async (
  id,
  userinfo,
  dispatch,
  dispatchType,
  toastDispatch,
  msg
) => {
  await makeAnAPICall(
    `DELETE`,
    `http://localhost:5000/api/wishlist/${id}`,
    dispatch,
    dispatchType,
    null,
    userinfo.token,
    toastDispatch,
    msg
  );
};
