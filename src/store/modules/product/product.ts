import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  postProduct,
  removeProduct,
  CategoryDTO,
  SubCategoryDTO,
  ColorDTO,
  SizeProductDTO,
  BrandDTO,
  ProductDTO,
  getProductById,
} from "api";
import axios from "axios";
import { addNotification } from "helpers";
import { IApiError, TLoading } from "store";
import { setNotification } from "../app";
import { tryGetCategoryById } from "../category";

interface IInitialState {
  product: ProductDTO | null;
  loading: boolean;
  error: IApiError | null;
}

const initialState: IInitialState = {
  product: null,
  loading: false,
  error: null,
};

export const tryGetProduct = createAsyncThunk(
  "product",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await getProductById(id);

      if (response.status === 200) {
        addNotification({ dispatch, status: "success" });
      }

      return response.data.data;
    } catch (error) {
      addNotification({ dispatch, status: "failed" });
      if (axios.isAxiosError(error)) {
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
    builder.addCase(tryGetProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      tryGetProduct.fulfilled,
      (state, { payload }: PayloadAction<ProductDTO | null | undefined>) => {
        if (payload) {
          state.product = payload;
        }
        state.loading = false;
      }
    );
    builder.addCase(
      tryGetProduct.rejected,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

const { reducer } = productSlice;

export default reducer;
