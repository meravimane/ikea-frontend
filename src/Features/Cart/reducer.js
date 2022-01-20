import { GET_CART_ITEMS, GET_CART_LOADING } from "./actionTypes";

const init = { cartData: [], loading: true };
export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        cartData: payload,
        loading: false,
      };
    default:
      return state;
  }
};
