import { createAppStackNavigator } from "@/navigation/Stack/createAppStackNavigator";
import OnBoarding from "@/screens/Onboarding";
import Home from "@/screens/Home";
import LoginScreen from "@/screens/Auth/LoginScreen";
import { useAppSelector } from "@/hooks/store";
import { selectAuthenticated } from "@/features/auth/authSlice";
import { AppScreens } from "./AppScreens";
import SearchScreen from "@/screens/SearchScreen";
const Stack = createAppStackNavigator();
export default function AppStack() {
  const isAuthenticated = useAppSelector(selectAuthenticated);

  return !isAuthenticated ? (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppScreens.ONBOARDING}
    >
      <Stack.Screen name={AppScreens.ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={AppScreens.AUTH_LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppScreens.HOME}
    >
      <Stack.Screen name={AppScreens.HOME} component={Home} />
      <Stack.Screen
        options={{ headerShown: true, presentation: "modal" }}
        name={AppScreens.SEARCH_SCREEN}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
}
