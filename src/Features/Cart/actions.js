import { GET_CART_LOADING, GET_CART_ITEMS } from "./actionTypes";

import axios from "axios";

export const getCartLoading = () => ({
  type: GET_CART_LOADING,
});

export const getCartItems = (payload) => ({
  type: GET_CART_ITEMS,
  payload,
});

export const fetchCartItems = () => (dispatch) => {
  fetch("http://localhost:1234/cart/")
    .then((e) => e.json())
    .then((e) => dispatch(getCartItems(e)));
};

export const sendCartItems = (payload) => (dispatch) => {
  axios
    .post("http://localhost:1234/cart/", {
      product: payload,
    })
    .then((response) => {
      console.log(response);
    });
};

export const deleteCartItems = (payload) => (dispatch) => {
  axios.delete(`http://localhost:1234/cart/${payload}`).then((res) => {
    dispatch(fetchCartItems());
  });
};
