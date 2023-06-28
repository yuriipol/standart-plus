import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../../Servises/fireBaseApi";

export const loginOperation = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutOperation = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
