import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productId = action.payload.id;
      const productExists = state.products.find(
        (product) => product.id === productId
      );

      if (productExists) {
        productExists.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);

        state.quantity += 1;
      }
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.quantity -= 1;
        state.products.splice(index, 1);
      }
    },
    emptyCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
