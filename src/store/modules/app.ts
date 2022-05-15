import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  notifications: any[];
}

const initialState: IInitialState = {
  notifications: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNotification(state, { payload }: PayloadAction<{}>) {
      state.notifications.push(payload);
    },
  },
});

const { actions, reducer } = appSlice;

export const { setNotification } = actions;

export default reducer;
