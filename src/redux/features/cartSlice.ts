import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";

const initialState = {
  products: [] as any,
  selectedProducts: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.products.find(
        (item: any) => item._id === product._id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
        state.selectedProducts = selectedProductsFunc(state);
        state.totalPrice = totalPriceFunc(state);
      } else {
        state.products.push({
          ...product,
          quantity: quantity,
        });
        state.selectedProducts = selectedProductsFunc(state);
        state.totalPrice = totalPriceFunc(state);
      }
    },

    updateQuantity: (state: any, action) => {
      state.products.map((product: any) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
          return product;
        }
      });
      state.selectedProducts = selectedProductsFunc(state);
      state.totalPrice = totalPriceFunc(state);
    },

    removeAProductFromCart: (state: any, action: PayloadAction<string>) => {
      const findRemoveItem = state.products.find(
        (item: any) => item._id === action.payload
      );
      if (findRemoveItem) {
        state.selectedProducts -= findRemoveItem.quantity;
        state.totalPrice -= findRemoveItem.price * findRemoveItem.quantity;
        state.products = state.products.filter(
          (item: any) => item._id !== action.payload
        );
      }
    },

    clearCart: (state) => {
      state.products = [];
      state.selectedProducts = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectedProductsFunc = (
  state: WritableDraft<{
    products: any;
    selectedProducts: number;
    totalPrice: number;
  }>
) =>
  state.products.reduce((total: number, product: any) => {
    // console.log(product.quantity);
    return total + product.quantity;
    // console.log(Number(total + product.quantity));
    // console.log(total);
  }, 0);

export const totalPriceFunc = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return total + product.quantity * Number(product.price);
  }, 0);

export const { addToCart, updateQuantity, removeAProductFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
