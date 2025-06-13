import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_LANGUAGE_KEY } from "@/localization/i18n";

// Define a type for the slice state
export interface DeviceSlice {
  os: typeof Platform.OS;
  defaultLang: string;
}

// Define the initial state using that type
const initialState: DeviceSlice = {
  os: Platform.OS,
  defaultLang: "id",
};

export const deviceSlice = createSlice({
  name: "device",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      (async () => {
        await AsyncStorage.setItem(STORE_LANGUAGE_KEY, action.payload);
      })();
      state.defaultLang = action.payload;
    },
  },
});
export const { setLang } = deviceSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const isIOS = (state: RootState) => state.device.os === "ios";
export const isAndroid = (state: RootState) => state.device.os === "android";
export const isWeb = (state: RootState) => state.device.os === "web";
export const getLang = (state: RootState) => state.device.defaultLang;

export default deviceSlice.reducer;
