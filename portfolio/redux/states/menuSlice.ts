import { createSlice } from "@reduxjs/toolkit";

type menuStateType = {
  isMenuOpen: boolean;
  color?: "Light" | "Dark";
};

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen: false,
    color: "Light" as "Light" | "Dark",
  },
  reducers: {
    toggleMenu: (state, { payload }: { payload: menuStateType }) => {
      return { ...state, ...payload };
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
