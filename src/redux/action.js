import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("Action Called addToCart", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.warn("Action Called removeFromCart", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = (data) => {
  console.warn("Action Called emptyCart", data);
  return {
    type: EMPTY_CART,
    data,
  };
};
