// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "./flightsSlice";

const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});

export default store;
