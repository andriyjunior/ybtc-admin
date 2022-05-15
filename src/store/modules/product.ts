import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostProductPayload, postProduct, TCategory } from "api";
import axios from "axios";
import { IApiError, TLoading } from "store";
import { setNotification } from "./app";

interface IInitialState {
  form?: {
    brand: string;
    category: TCategory;
    color: string;
    size: string[];
  };
  isLoading: TLoading;
  error: IApiError | null;
}

const initialState: IInitialState = {
  isLoading: "idle",
  error: null,
};

export const tryPostProduct = createAsyncThunk(
  "product/postProduct",
  async (body: IPostProductPayload, { rejectWithValue, dispatch }) => {
    try {
      const response = await postProduct(body);

      if (response.status === 200) {
        dispatch(setNotification({ title: "Success", status: "success" }));
        return response;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(setNotification({ title: "Not valid", status: "failed" }));

        return rejectWithValue(error.response?.data);
      }
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(tryPostProduct.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(tryPostProduct.fulfilled, (state) => {
      state.isLoading = "fulfilled";
    });
    builder.addCase(
      tryPostProduct.rejected,
      (state, { payload }: PayloadAction<any>) => {
        state.isLoading = "rejected";
        state.error = payload;
      }
    );
  },
});

const { reducer } = productSlice;

export default reducer;
