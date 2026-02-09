import { configureStore } from "@reduxjs/toolkit";
import candidaturesReducer from "./candidaturesSlice.js";

export const store = configureStore({
  reducer: {
    candidatures: candidaturesReducer,
  },
});
