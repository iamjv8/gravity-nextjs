"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  selectedCategory: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    changeSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategories, changeSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
