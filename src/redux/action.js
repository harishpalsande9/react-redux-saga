export const addToCart = (data) => {
  console.warn("Action Called", data);
  return {
    type: "Add_TO_CART",
    data: data,
  };
};
