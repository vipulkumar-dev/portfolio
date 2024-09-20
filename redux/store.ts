import { configureStore } from "@reduxjs/toolkit";
import fullpageReducer from "./states/fullpageSlice";
import menuReducer from "./states/menuSlice";
import splineReducer from "./states/splineSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      fullpageReducer,
      menuReducer,
      splineReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
