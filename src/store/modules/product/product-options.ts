import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductOptions, getProductOptions } from "api";
import axios from "axios";
import { TLoading } from "store";
import { IApiError } from "store/store.types";

interface IInitialState {
  data: IProductOptions;
  loading: boolean;
  error: IApiError | null;
}

const initialState: IInitialState = {
  data: {
    colors: [],
    brands: [],
    subCategories: [],
    categories: [],
    sizes: [],
  },
  loading: false,
  error: null,
};

export const tryGetProductOptions = createAsyncThunk(
  "product/getProductOptions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProductOptions();
      if (response.status === 200) {
        return response.data.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        rejectWithValue(error.response?.data);
      }
    }
  }
);

const productOptionsSlice = createSlice({
  name: "product/options",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(tryGetProductOptions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      tryGetProductOptions.fulfilled,
      (state, { payload }: PayloadAction<IProductOptions>) => {
        state.loading = false;
        state.data = payload;
      }
    );
    builder.addCase(
      tryGetProductOptions.rejected,
      (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

const { actions, reducer } = productOptionsSlice;

export default reducer;
