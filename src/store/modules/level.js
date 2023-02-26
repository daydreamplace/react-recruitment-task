import { createSlice } from "@reduxjs/toolkit";

const level = createSlice({
  name: "levelReducer",
  initialState: { level: "" },
  reducers: {
    setLevel: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setLevel } = level.actions;
export const levelReducer = level.reducer;
