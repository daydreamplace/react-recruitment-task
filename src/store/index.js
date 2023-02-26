import { configureStore } from "@reduxjs/toolkit";
import { levelReducer } from "./modules/level";

const store = configureStore({
  reducer: {
    level: levelReducer,
  },
});

export default store;
