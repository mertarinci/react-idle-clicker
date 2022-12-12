import { configureStore } from '@reduxjs/toolkit';

import productReducer from "../features/product/coreSlice"


export const store = configureStore({
  reducer: {
    core: productReducer,

  }

});

