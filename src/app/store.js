import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/product/productSlice"
import workerReducer from "../features/worker/workerSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    worker: workerReducer
  },
});
