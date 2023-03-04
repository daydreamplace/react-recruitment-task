import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  algorithm: localStorage.getItem("algorithm") || "",
  periodic: localStorage.getItem("periodic") || "",
  band: localStorage.getItem("band"),
  assetsGroup: [],
  asset: "",
  percent: "",
  startDate: "",
  endDate: "",
};

const alloc = createSlice({
  name: "allocReducer",
  initialState: initialState,
  reducers: {
    setAlloc: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
    initialize: () => initialState,
  },
});

export const { setAlloc, initialize } = alloc.actions;
export const allocReducer = alloc.reducer;
