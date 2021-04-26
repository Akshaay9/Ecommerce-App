import { makeAnAPICall } from "./APiCalls";

export const addToWishHandlerBasedOnLogin = async (
  id,
  userinfo,
  setSHowModal,
  dispatch,
  dispatchType,
  toastDispatch,
  msg,
  setLoader
) => {
  if (userinfo.token == null) {
    setSHowModal(true);
  } else {
    if (setLoader) {
   setLoader(true)
 }
 
    await makeAnAPICall(
      `POST`,
      `http://localhost:5000/api/wishlist/${id}`,
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
export const removeFromWishList = async (
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
    `http://localhost:5000/api/wishlist/${id}`,
    dispatch,
    dispatchType,
    null,
    userinfo.token,
    toastDispatch,
    msg,
    setLoader
  );
};
