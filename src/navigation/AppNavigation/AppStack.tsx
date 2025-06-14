import { createAppStackNavigator } from "@/navigation/Stack/createAppStackNavigator";
import OnBoarding from "@screen/Onboarding";
import LoginScreen from "@screen/Auth/LoginScreen";
import { useAppSelector } from "@/hooks/store";
import { selectAuthenticated } from "@/features/auth/authSlice";
import { AppScreens } from "./AppScreens";
import SearchScreen from "@/screens/SearchScreen";
import ProductDetailScreen from "@/screens/Products/DetailScreen";
import { HomeScreen } from "@screen/Home";
const Stack = createAppStackNavigator();
export default function AppStack() {
  const isAuthenticated = useAppSelector(selectAuthenticated);

  return !isAuthenticated ? (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppScreens.AUTH_LOGIN}
    >
      <Stack.Screen name={AppScreens.ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={AppScreens.AUTH_LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppScreens.HOME}
    >
      <Stack.Screen
        options={{ animation: "ios_from_right" }}
        name={AppScreens.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />

      <Stack.Screen name={AppScreens.HOME} component={HomeScreen} />
      <Stack.Screen
        options={{ headerShown: true, presentation: "modal" }}
        name={AppScreens.SEARCH_SCREEN}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
}
