import { createSlice } from "@reduxjs/toolkit";

const FullpageSlice = createSlice({
  name: "fullpage",
  initialState: {
    open: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = FullpageSlice.actions;

export default FullpageSlice.reducer;
