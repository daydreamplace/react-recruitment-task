import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: localStorage.getItem("strategyTitle") || "",
  algorithm: localStorage.getItem("algorithm") || "",
  periodic: localStorage.getItem("periodic") || "",
  band: localStorage.getItem("band") || "",
  assetsGroup: [],
  asset: "",
  percent: "",
  // startDate: localStorage.getItem("startDate")
  //   ? new Date(Date.parse(localStorage.getItem("startDate")))
  //   : new Date("2003-01-01"),
  // endDate: localStorage.getItem("endDate")
  //   ? new Date(Date.parse(localStorage.getItem("endDate")))
  //   : new Date(),
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
