import { createSlice } from "@reduxjs/toolkit";

type splineStateType = {
  isActive: boolean;
};

const splineSlice = createSlice({
  name: "menu",
  initialState: {
    isActive: true,
  },
  reducers: {
    splineSceneVisibility: (state, { payload }: { payload: boolean }) => {
      return {
        isActive: payload,
      };
    },
  },
});

export const { splineSceneVisibility } = splineSlice.actions;
export default splineSlice.reducer;
