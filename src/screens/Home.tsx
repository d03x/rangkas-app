import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";
import HomeTabScreen from "./Tabs/HomeTabScreen";
import NotificationTabScreen from "./Tabs/NotificationTabScreen";
import TabBar from "@/components/TabBar";
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import ChatTabScreen from "./Tabs/ChatTabScreen";
import AccountTabScreen from "./Tabs/AccountTabScreen";
import { Easing } from "react-native-reanimated";
import { t } from "i18next";
const renderIcon = (type: AppScreens, isFocused?: boolean, color?: string) => {
  switch (type) {
    case AppScreens.HOME_TAB:
      return (
        <Ionicons
          color={color}
          size={22}
          name={isFocused ? "home" : "home-outline"}
        />
      );
      break;
    case AppScreens.NOTIFICATION_TAB:
      return (
        <Ionicons
          color={color}
          size={24}
          name={
            isFocused ? "notifications-circle" : "notifications-circle-outline"
          }
        />
      );
      break;
    case AppScreens.CHAT_TAB:
      return (
        <Ionicons
          color={color}
          size={22}
          name={isFocused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
        />
      );
      break;
    case AppScreens.ACCOUNT_TAB:
      return (
        <Ionicons
          color={color}
          size={22}
          name={isFocused ? "person-circle" : "person-circle-outline"}
        />
      );
      break;
    default:
      <Ionicons color={color} name="help" />;
      break;
  }
};

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyleInterpolator: ({ current }) => ({
          sceneStyle: {
            opacity: current.progress.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [0, 1, 0],
            }),
          },
        }),
        transitionSpec: {
          animation: "timing",
          config: {
            duration: 150,
            easing: Easing.inOut(Easing.ease),
          },
        },
        headerShown: false,
      }}
      tabBar={(props) => <TabBar renderIcon={renderIcon} {...props} />}
    >
      <Tab.Screen
        options={{ title: t('navigation.home') }}
        name={AppScreens.HOME_TAB}
        component={HomeTabScreen}
      />
      <Tab.Screen
        options={{ title: t('navigation.notifications') }}
        name={AppScreens.NOTIFICATION_TAB}
        component={NotificationTabScreen}
      />
      <Tab.Screen
        options={{ title: t('navigation.chat') }}
        name={AppScreens.CHAT_TAB}
        component={ChatTabScreen}
      />
      <Tab.Screen
        options={{ title: t('navigation.account') }}
        name={AppScreens.ACCOUNT_TAB}
        component={AccountTabScreen}
      />
    </Tab.Navigator>
  );
};

export default Home;
