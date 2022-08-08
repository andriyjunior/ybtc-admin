import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDTO } from "api";
import { IAuth, signIn, signUp } from "api/auth";
import { clearToken, setToken } from "utils/auth";

interface IInitialState {
  isLoading: boolean;
  data: UserDTO | null;
}

const initialState: IInitialState = {
  isLoading: true,
  data: null,
};

export const tryLogout = createAsyncThunk("logout", async () => {
  clearToken();
});

export const trySignIn = createAsyncThunk(
  "signIn",
  async (body: IAuth, thunkAPI) => {
    const response = await signIn(body);

    if (response.data.data) {
      setToken(response.data.data.accessToken);
    }

    return response.data.data as UserDTO;
  }
);

export const trySignUp = createAsyncThunk(
  "signUp",
  async (body: IAuth, thunkAPI) => {
    await signUp(body);
    await thunkAPI.dispatch(trySignIn(body));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(trySignIn.fulfilled, (state, action) => {
        state.data = action.payload;
        return state;
      })
      .addCase(tryLogout.fulfilled, (state) => {
        state.data = null;
      });
  },
});

const { reducer, actions } = authSlice;

export default reducer;
