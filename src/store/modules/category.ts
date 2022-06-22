import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoryById, ProductDTO, CategoryDTO } from "api";
import { IApiError, TLoading } from "store/store.types";

interface IInitialState {
  category: CategoryDTO | null;
  products: ProductDTO[];
  loading: boolean;
  error: IApiError | null;
}

const initialState: IInitialState = {
  loading: false,
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
      state.category = null;
      state.products = [];
      state.loading = true
    });
    builder.addCase(tryGetCategoryById.fulfilled, (state, { payload }) => {
      state.category = payload.data.category;
      state.products = payload.data.products;
      state.loading = false
    });
  },
});

const { reducer } = categoriesSlice;
export default reducer;
