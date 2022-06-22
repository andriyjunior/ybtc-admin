import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postProduct, removeProduct, CategoryDTO } from "api";
import axios from "axios";
import { addNotification } from "helpers";
import { IApiError, TLoading } from "store";
import { setNotification } from "../app";
import { tryGetCategoryById } from "../category";

interface IInitialState {
  form?: {
    brand: string;
    category: CategoryDTO;
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
  async (body: {}, { rejectWithValue, dispatch }) => {
    try {
      const response = await postProduct(body);

      if (response.status === 200) {
        addNotification({ dispatch, status: "success" });
        return response;
      }
    } catch (error) {
      addNotification({ dispatch, status: "failed" });
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const tryRemoveProduct = createAsyncThunk(
  "product/removeProduct",
  async (id: string, { rejectWithValue, dispatch, getState }: any) => {
    const state = await getState();

    try {
      addNotification({
        dispatch,
        status: "success",
        customMsg: "Successfully removed",
      });
      const response = await removeProduct(id);

      dispatch(tryGetCategoryById(state.category.category.id));

      return response;
    } catch (err) {
      addNotification({ dispatch, status: "failed" });
      if (axios.isAxiosError(err)) {
        rejectWithValue(err.response?.data);
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
