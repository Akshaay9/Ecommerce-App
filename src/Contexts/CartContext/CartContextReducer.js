export const cartContextReducerFun = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_TO_CART":
                return {
                    ...state,cartItems:[...state.cartItems,{...payload,inCartQty:1}]
                }
        case "INCREASE_QTY":
            return {
                ...state,cartItems:state.cartItems.map((ele)=>ele.id==payload.id ? {...ele,inCartQty:ele.inCartQty+1}:ele)
}
        case "DECREASE_QTY":
            return {
                ...state,cartItems:state.cartItems.map((ele)=>ele.id==payload.id ? {...ele,inCartQty:ele.inCartQty-1}:ele)
}
        case "REMOVE_FROM_CART":
            return {
                ...state,cartItems:state.cartItems.filter((ele)=>ele.id!==payload.id)
}
        default:
           return state
    }
}