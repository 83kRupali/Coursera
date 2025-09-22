import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find(item => item.id === plant.id);
      if (!existing) {
        state.items.push({ ...plant, quantity: 1 });
        state.totalItems += 1;
        state.totalCost += plant.price;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.price;
      }
    },
    deleteItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
