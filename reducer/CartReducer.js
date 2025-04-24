export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const new_cart = new Map(state);

      if (!new_cart.get(action.payload.product_name)) {
        new_cart.set(action.payload.product_name, [0, action.payload.price]);
      }

      const new_value = [
        new_cart.get(action.payload.product_name)[0] + 1,
        new_cart.get(action.payload.product_name)[1],
      ];
      new_cart.set(action.payload.product_name, new_value);

      return new_cart;
    case "REMOVE_PRODUCT":
      const r_cart = new Map(state);
      r_cart.delete(action.payload.product_name);

      return r_cart;
    default:
      return state;
  }
};
