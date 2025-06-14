import type { RootState } from "@/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type InitialDataType = {
  isAuthenticated: boolean;
};

const initialState: InitialDataType = {
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export const selectAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export default authSlice;
