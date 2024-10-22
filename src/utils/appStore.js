import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  }
});

export default appStore;