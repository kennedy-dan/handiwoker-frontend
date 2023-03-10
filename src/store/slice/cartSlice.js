import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../../utils/axios";

export const addToCart = createAsyncThunk("/cart", async (carts) => {
  const response = await axios.post("/cart", carts);

  return response.data.data;
});

export const getCarts = createAsyncThunk("/getcart/", async () => {
  const response = await axios.get("/getcart");
  console.log(response.data);
  return response.data;
});

export const removeFromCart = createAsyncThunk(
  "/removeFromCart ",
  async (_id) => {
    const response = await axios.put(`/cart/${_id}`);
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  status: "idle",
  results: null,
  carts: {
    status: "idle",
    result: null,
  },
  getcart: {
    status: "idle",
    result: null,
  },
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  extraReducers: (builder) => {
    // builder;
    //ADD TO CART SLICE
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        if (!payload) return;
        state.carts.status = "successful";
        state.carts.result = payload;
      });
      //GET CART
    builder
      .addCase(getCarts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCarts.fulfilled, (state, { payload }) => {
        console.log(payload);
        if (!payload) return;
        state.getcart.status = "successful";
        state.getcart.result = payload;
      });
      //REMOVE CART
    builder
      .addCase(removeFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeFromCart.fulfilled, (state, { payload }) => {
        console.log(payload);
        if (!payload) return;
        state.getcart.status = "successful";
        state.getcart.result = payload;
        toast.success("item has been deleted ");
      });
  },
});

export default cartSlice.reducer;
