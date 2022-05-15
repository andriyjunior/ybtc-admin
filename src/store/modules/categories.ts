import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories, TCategory } from "api";
import { IApiError, TLoading } from "store/store.types";

interface IInitialState {
  categories?: TCategory[];
  isLoading: TLoading;
  success?: boolean;
  error: IApiError | null;
}

const initialState: IInitialState = {
  isLoading: "idle",
  categories: [],
  error: null,
};

export const tryGetCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await getCategories({});
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "categoryies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(tryGetCategories.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(tryGetCategories.fulfilled, (state, { payload }) => {
      state.categories = [];
      payload.data.forEach((item: any) => {
        state.categories?.push({ id: item._id, name: item.name });
      });
      state.isLoading = "fulfilled";
    });
  },
});

const { reducer } = categorySlice;

export default reducer;
