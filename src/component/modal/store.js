import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.active = true;
    },
    close: (state) => {
      state.active = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
