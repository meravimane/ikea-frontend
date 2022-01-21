import { GET_PRODUCT_DETAIL, GET_PRODUCT_LOADING } from "./actionTypes";

export const getProductDetails = (payload) => ({
  type: GET_PRODUCT_DETAIL,
  payload,
});

export const getProductLoading = () => ({
  type: GET_PRODUCT_LOADING,
});

export const getDetailsByApi = (payload) => (dispatch) => {
  fetch(`https://ikea-clone-2022.herokuapp.com/products/${payload}`)
    .then((e) => e.json())
    .then((e) => dispatch(getProductDetails(e)));
};
