import { PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      //Add To cart Logic
      console.warn(" PRODUCT_LIST Condition", action);
      return [action.data];

    default:
      //No Case Matched
      return data;
  }
};
