import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/ProductSlice';
import authReducer from './features/AuthSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,

  },
});

export default store;
