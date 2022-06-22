import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSubCategories, SubCategoryDTO } from "api";
import axios from "axios";
import { error } from "console";
import { IApiError } from "store/store.types";

interface IInitialState {
  subCategory: SubCategoryDTO | any;
  loading: boolean;
  error: IApiError | null;
}

const initialState: IInitialState = {
  subCategory: null,
  loading: false,
  error: null,
};

export const tryGetSubCategory = createAsyncThunk(
  "subCategory/getSubCategory",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await getSubCategories(id);

      if (response.status === 200) {
        return response.data.data;
      }
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(tryGetSubCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      tryGetSubCategory.fulfilled,
      (
        state,
        { payload }: PayloadAction<SubCategoryDTO | null | undefined>
      ) => {
        state.subCategory = payload;
        state.loading = false;
      }
    );
  },
});

const { reducer } = subCategorySlice;

export default reducer;
