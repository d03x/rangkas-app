import { useCallback, useEffect, useRef, useState } from "react";
import "@/localization/i18n";
import * as Fonts from "expo-font";
import { enableFreeze, enableScreens } from "react-native-screens";
import resources from "./src/resources";
import * as SplashScreen from "expo-splash-screen";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { createTheme, lightColors, ThemeProvider } from "@rneui/themed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { isAndroid, isIOS } from "@/utils/device";
import * as ScreenOrientation from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { getLang } from "@/features/devices/deviceSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_LANGUAGE_KEY } from "@/localization/i18n";
import { getAuthToken } from "@/lib/auth-store";
import { setAuth } from "@/features/auth/authSlice";
import LinkingConfiguration from "@/navigation/AppNavigation/LinkingConfiguration";
import AppStack from "@/navigation/AppNavigation/AppStack";
import { Platform } from "react-native";
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});
enableScreens(false);
enableFreeze(true);

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  mode: "light",
});

export default function Application() {
  ///AUTH HANDLER
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(setAuth(true));
  // }, []);
  const lang = useAppSelector(getLang);
  useEffect(() => {
    (async () => {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
    })();
  }, [lang]);
  const isIosDevice = useAppSelector(isIOS);
  const isAndroidDevice = useAppSelector(isAndroid);
  const [loading, setLoading] = useState(false);
  const loadFonts = useCallback(async () => {
    try {
      await Fonts.loadAsync(resources.fonts);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const setupOrientation = useCallback(async () => {
    try {
      if (isIosDevice || isAndroidDevice) {
        await ScreenOrientation?.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  async function checkAuth() {
    const auth = await getAuthToken();
    if (auth) {
      dispatch(setAuth(true));
    } else {
      console.log("NONE");
    }
  }
  /**
   * Load App
   */
  const loadApp = useCallback(async () => {
    await Promise.all([checkAuth(), loadFonts(), setupOrientation()]);
    setLoading(false);
  }, []);
  //run load app in here
  useEffect(() => {
    loadApp();
  }, []);

  useEffect(() => {
    (async () => {
      if (!loading) {
        SplashScreen.hideAsync();
      }
    })();
  }, [loading]);
  const navigationRef = useRef(null);
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer
            ref={navigationRef}
            linking={LinkingConfiguration}
          >
            <AppStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
