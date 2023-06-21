import { configureStore } from "@reduxjs/toolkit";
import couterReduce from "./products.slice";

const store = configureStore({
  reducer: {
    couter: couterReduce,
  },
});

export default store;
