"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  filteredTransactions: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setAllTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    setFilteredTransactions: (state, action) => {
      state.filteredTransactions = action.payload;
    },
  },
});

export const { setAllTransactions, setFilteredTransactions } =
  transactionSlice.actions;

export default transactionSlice.reducer;
