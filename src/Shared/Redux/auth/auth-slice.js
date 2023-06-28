import { createSlice } from "@reduxjs/toolkit";
import {
  logOutOperation,
  loginOperation,
} from "./auth-operations";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
  },
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginOperation.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginOperation.fulfilled, (state, { payload }) => {
      state.user = { ...payload };
      state.isLogin = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(loginOperation.rejected, (state, { payload }) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(logOutOperation.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logOutOperation.fulfilled, (state, { payload }) => {
      return initialState;
    });
    builder.addCase(logOutOperation.rejected, (state, { payload }) => {
      state.isLogin = true;
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export default authSlice.reducer;
