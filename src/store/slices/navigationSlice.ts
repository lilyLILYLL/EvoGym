import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pages } from "../../contants/constants";

type NavigationSlice = {
  selectedPage: Pages;
};
const initialState: NavigationSlice = {
  selectedPage: Pages.HOME,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    // action.payload
    setSelectedPage(state, action: PayloadAction<Pages>) {
      state.selectedPage = action.payload;
    },
  },
});

export const { setSelectedPage } = navigationSlice.actions;
