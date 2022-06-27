import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART } from "./constant";

export const cardData = (data = [], action) => {
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
      return 1 + 1;
    case REMOVE_TO_CART:
      //Add To cart Logic
      console.warn(" REMOVE_TO_CART Condition", action);
      return 1 - 1;
    default:
      //No Case Matched
      return "0";
  }
};
