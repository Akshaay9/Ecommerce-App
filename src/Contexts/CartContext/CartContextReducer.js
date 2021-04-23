export const cartContextReducerFun = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_CART_ITEMS":
      return {
        ...state,
        cartItems: payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, inCartQty: 1 }],
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((ele) =>
          ele._id == payload._id
            ? { ...ele, inCartQty: ele.inCartQty + 1 }
            : ele
        ),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((ele) =>
          ele._id == payload._id
            ? { ...ele, inCartQty: ele.inCartQty - 1 }
            : ele
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((ele) => ele._id !== payload._id),
      };
    default:
      return state;
  }
};
