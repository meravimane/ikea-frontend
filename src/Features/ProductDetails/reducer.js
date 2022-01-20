import { GET_PRODUCT_DETAIL, GET_PRODUCT_LOADING } from "./actionTypes";

const init = { data: {}, loading: true };
export const detailsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    default:
      return state;
  }
};
