"use client";
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import typeReducer from "./typeSlice";
import transactionReducer from "./transactionSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    type: typeReducer,
    transaction: transactionReducer,
  },
});
