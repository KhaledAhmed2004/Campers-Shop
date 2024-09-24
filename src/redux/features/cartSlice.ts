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
    // Add product to cart or update quantity if it already exists
    addToCart: (state, action: PayloadAction<any>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.products.find(
        (item: any) => item._id === product._id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.products.push({
          ...product,
          quantity: quantity,
        });
      }
      // Update selectedProducts and totalPrice after adding to the cart
      state.selectedProducts = selectedProductsFunc(state);
      state.totalPrice = totalPriceFunc(state);
    },

    updateQuantity: (state, action) => {
      const { type, _id } = action.payload;
      const product = state.products.find((item: any) => item._id === _id);

      if (product) {
        if (type === "increment") {
          product.quantity += 1; // Increment quantity
        } else if (type === "decrement" && product.quantity > 1) {
          product.quantity -= 1; // Decrement quantity
        }

        // Optionally recalculate totals here if necessary
        state.selectedProducts = selectedProductsFunc(state);
        state.totalPrice = totalPriceFunc(state);
      }
    },

    // Remove a specific product from the cart
    removeAProductFromCart: (state: any, action: PayloadAction<string>) => {
      const findRemoveItem = state.products.find(
        (item: any) => item._id === action.payload
      );
      if (findRemoveItem) {
        // Update selectedProducts and totalPrice after removal
        state.selectedProducts -= findRemoveItem.quantity;
        state.totalPrice -= findRemoveItem.price * findRemoveItem.quantity;
        state.products = state.products.filter(
          (item: any) => item._id !== action.payload
        );
      }
    },

    // Clear all products from the cart
    clearCart: (state) => {
      state.products = [];
      state.selectedProducts = 0;
      state.totalPrice = 0;
    },
  },
});

// Calculate total selected products in the cart
export const selectedProductsFunc = (
  state: WritableDraft<{
    products: any;
    selectedProducts: number;
    totalPrice: number;
  }>
) =>
  state.products.reduce((total: number, product: any) => {
    return total + product.quantity;
  }, 0);

// Calculate total price of products in the cart
export const totalPriceFunc = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return total + product.quantity * Number(product.price);
  }, 0);

export const { addToCart, updateQuantity, removeAProductFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
