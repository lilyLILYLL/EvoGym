import { configureStore } from "@reduxjs/toolkit";
import { navigationSlice, setSelectedPage } from "./slices/navigationSlice";
export const store = configureStore({
  reducer: {
    [navigationSlice.name]: navigationSlice.reducer,
  },
});

export { setSelectedPage };
export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
