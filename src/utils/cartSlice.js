/** @format */

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state over here
      // state.items.push(action.payload);
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if the item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      // state.items = state.items.filter(
      //   item => item.card.info.id !== action.payload.id
      // );
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity if more than 1
        } else {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.id
          ); // Remove item if quantity is 0
        }
      }
    },
    clearCart: (state, action) => {
      // state.items.length = 0;
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
