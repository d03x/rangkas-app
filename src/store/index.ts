import authSlice from "@/features/auth/authSlice";
import { counterSlice } from "@/features/counter/counterSlice";
import { deviceSlice } from "@/features/devices/deviceSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter : counterSlice.reducer,
    device : deviceSlice.reducer,
    auth:authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export { store };
