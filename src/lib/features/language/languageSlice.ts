"use client";
import { createSlice } from "@reduxjs/toolkit";

// Initial state object
const initialState = {
  isLanguage: "en",
};

const languagelSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setIsLanguage: (state, action) => {
      state.isLanguage = action.payload;
    },
  },
});

export const { setIsLanguage } = languagelSlice.actions;

export default languagelSlice.reducer;
