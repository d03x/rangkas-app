import type { RouteProp } from "@react-navigation/native";
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import type { AppScreens } from "./AppScreens";



export type AppScreenLists = {
  [AppScreens.CHAT_TAB]: undefined;
  [AppScreens.ACCOUNT_TAB] : undefined;
  [AppScreens.HOME]: undefined;
  [AppScreens.AUTH_LOGIN]: undefined;
  [AppScreens.ONBOARDING]: undefined;
  [AppScreens.NOTIFICATION_TAB]: undefined;
  [AppScreens.HOME_TAB]: undefined;
  [AppScreens.SEARCH_SCREEN] : undefined,
  [AppScreens.CATEGORY_TAB]:undefined
};

export type AppScreenProp<T extends AppScreens> = {
  navigation: NativeStackNavigationProp<AppScreenLists, T>;
  route: RouteProp<AppScreenLists, T>;
};

export type AppScreenProps = NativeStackScreenProps<AppScreenLists>;
