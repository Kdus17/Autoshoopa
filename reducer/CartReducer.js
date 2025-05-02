export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const new_cart = new Map(state);

      if (!new_cart.get(action.payload.product_Id)) {
        new_cart.set(action.payload.product_Id, [
          0,
          action.payload.price,
          action.payload.product_name,
        ]);
      }

      const new_value = [
        new_cart.get(action.payload.product_Id)[0] + 1,
        new_cart.get(action.payload.product_Id)[1],
        new_cart.get(action.payload.product_Id)[2],
      ];
      new_cart.set(action.payload.product_Id, new_value);

      return new_cart;
    case "REMOVE_PRODUCT":
      const r_cart = new Map(state);
      r_cart.delete(action.payload.product_Id);

      return r_cart;

    case "DEC_PRODUCT":
      const d_cart = new Map(state);

      const dec_cart = [
        d_cart.get(action.payload.product_Id)[0] - 1,
        d_cart.get(action.payload.product_Id)[1],
        d_cart.get(action.payload.product_Id)[2],
      ];
      console(action.payload.product_Id);
      d_cart.set(action.payload.product_Id, dec_cart);

      console.log("here");

      return d_cart;

    default:
      return state;
  }
};
