import { ADD_TO_CART } from "./constant";
import { REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.warn("Reducer Called", action);
  //   return action.data;
  // } else {
  //   return "No Action Called";
  // }
  switch (action.type) {
    case ADD_TO_CART:
      //Add To cart Logic
      console.warn(" ADD_TO_CART Condition", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      //Add To cart Logic
      console.warn(" REMOVE_FROM_CART Condition", action);
      data.length = data.length - 1;
      return [...data];

    default:
      //No Case Matched
      return data;
  }
};
