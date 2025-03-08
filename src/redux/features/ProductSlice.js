import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../services/ProductService";



export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (categoryType, { rejectWithValue }) => {
      try {
        const response = await ProductService.fetchProducts(categoryType);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = productSlice.actions;

export default productSlice.reducer;
