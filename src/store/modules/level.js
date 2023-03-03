import { createSlice } from "@reduxjs/toolkit";

const level = createSlice({
  name: "levelReducer",
  initialState: { level: "" },
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const { setLevel } = level.actions;
export const levelReducer = level.reducer;
