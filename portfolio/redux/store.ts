import { configureStore } from "@reduxjs/toolkit";
import fullpageReducer from "./states/fullpageSlice";
import menuReducer from "./states/menuSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      fullpageReducer,
      menuReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
