import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoryById, ProductDTO, TCategory } from "api";
import { IApiError, TLoading } from "store/store.types";

interface IInitialState {
  category: TCategory | null;
  products: ProductDTO[];
  loading: TLoading;
  error: IApiError | null;
}

const initialState: IInitialState = {
  loading: "idle",
  error: null,
  category: null,
  products: [],
};

export const tryGetCategoryById = createAsyncThunk(
  "category/getCategory",
  async (id: string) => {
    const response = await getCategoryById(id);
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(tryGetCategoryById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(tryGetCategoryById.fulfilled, (state, { payload }) => {
      state.category = payload.data.category;
      state.products = payload.data.products;
      state.loading = "fulfilled";
    });
  },
});

const { reducer } = categoriesSlice;
export default reducer;
