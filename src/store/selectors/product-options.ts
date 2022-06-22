import { RootState } from "store/store";

export const selectProductOptionsLoading = (state: RootState) =>
  state.productOptions.loading;

export const selectProductOptions = (state: RootState) =>
  state.productOptions.data;
