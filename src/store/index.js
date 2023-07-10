import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "@/component/modal/store";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});
