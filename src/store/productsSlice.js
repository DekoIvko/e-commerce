import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { appConfig } from "../appConfig";

const initialState = {
  status: "",
  products: [],
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log(state, action);
      //   state.products = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetProductsThunk.rejected, (state, action) => {
        state.status = "FAILED";
        state.errors = action.payload;
      })
      .addCase(GetProductsThunk.pending, (state, action) => {
        state.status = "LOADING";
      })
      .addCase(GetProductsThunk.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        state.products = action.payload.data;
      });
  },
});

export const GetProductsThunk = createAsyncThunk("products/get", async () => {
  const fetchData = await fetch(`${appConfig.baseApiURL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await fetchData.json();
  return res;
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
