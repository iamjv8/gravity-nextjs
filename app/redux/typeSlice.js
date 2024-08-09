"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: [],
  selectedType: "",
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    changeSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

export const { setType, changeSelectedType } = typeSlice.actions;

export default typeSlice.reducer;
