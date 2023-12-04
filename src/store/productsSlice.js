import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { appConfig } from "../appConfig";
import toast from "react-hot-toast";

const initialState = {
  status: "",
  products: [],
  cartProducts: [],
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      // added GetProductsThunk
    },
    addCartProduct: (state, action) => {
      const check = state.cartProducts.some((item) => item._id === action.payload._id);
      if (check) {
        toast("Already item in cart");
      } else {
        toast("successfully add item in cart");
        const total = action.payload.price;
        state.cartProducts = [...state.cartProducts, { ...action.payload, qty: 1, total }];
      }
    },
    removeCartProduct: (state, action) => {
      const removedProduct = state.cartProducts.filter((item) => item._id !== action.payload);
      state.cartProducts = removedProduct;
      toast("One item is removed!");
    },
    increaseQty: (state, action) => {
      const newCartProducts = state.cartProducts.map((item) => {
        if (item._id === action.payload) {
          item.qty++;
          item.total = item.price * item.qty;
        }
        return item;
      });
      state.cartProducts = newCartProducts;
    },
    decreaseQty: (state, action) => {
      const newCartProducts = state.cartProducts.map((item) => {
        if (item._id === action.payload) {
          if (item.qty > 1) {
            item.qty--;
            item.total = item.price * item.qty;
          }
        }
        return item;
      });
      state.cartProducts = newCartProducts;
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

export const { setProducts, addCartProduct, removeCartProduct, increaseQty, decreaseQty } = productsSlice.actions;
export default productsSlice.reducer;
