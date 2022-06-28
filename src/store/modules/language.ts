import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  language: "en" | "ua";
}

const initialState: IInitialState = {
  language: "en",
};

const appSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, { payload }: PayloadAction<"en" | "ua">) {
      state.language = payload;
    },
  },
});

const { actions, reducer } = appSlice;

export const { setLanguage } = actions;

export default reducer;
