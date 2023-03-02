import { configureStore } from "@reduxjs/toolkit";
import { levelReducer } from "./modules/level";
import { allocReducer } from "./modules/alloc";

const store = configureStore({
  reducer: {
    level: levelReducer,
    alloc: allocReducer,
  },
});

export default store;
