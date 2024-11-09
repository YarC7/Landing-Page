import { createSlice } from "@reduxjs/toolkit";

// Initial state object
const initialState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode } = themeSlice.actions;

export default themeSlice.reducer;