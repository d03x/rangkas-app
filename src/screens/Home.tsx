import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";
import HomeTabScreen from "./Tabs/HomeTabScreen";
import NotificationTabScreen from "./Tabs/NotificationTabScreen";
import TabBar from "@/components/TabBar";
const Tab = createBottomTabNavigator();
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import ChatTabScreen from "./Tabs/ChatTabScreen";
import AccountTabScreen from "./Tabs/AccountTabScreen";
import { Easing } from "react-native-reanimated";
import { t } from "i18next";
import HomeIcon from "@asset/icons/navigation/home.svg";
import ChatIcon from "@asset/icons/navigation/chat.svg";
import UserIcon from "@asset/icons/navigation/user.svg";
import NotificationIcon from "@asset/icons/bell-svgrepo-com.svg";
import Category from "@asset/icons/navigation/categories.svg";

const renderIcon = (type: AppScreens, isFocused?: boolean, color?: string) => {
  switch (type) {
    case AppScreens.HOME_TAB:
      return <HomeIcon width={23} height={23} />;
      break;
    case AppScreens.NOTIFICATION_TAB:
      return <NotificationIcon width={23} height={23} />;
      break;
    case AppScreens.CHAT_TAB:
      return <ChatIcon width={24} height={24} />;
      break;
    case AppScreens.ACCOUNT_TAB:
      return <UserIcon width={24} height={24} />;
      break;
    case AppScreens.CATEGORY_TAB:
      return <Category width={23} height={23} />;
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
        options={{ title: t("navigation.home") }}
        name={AppScreens.HOME_TAB}
        component={HomeTabScreen}
      />
      <Tab.Screen
        options={{ title: t("navigation.category") }}
        name={AppScreens.CATEGORY_TAB}
        component={HomeTabScreen}
      />
      <Tab.Screen
        options={{ title: t("navigation.notifications") }}
        name={AppScreens.NOTIFICATION_TAB}
        component={NotificationTabScreen}
      />
      <Tab.Screen
        options={{ title: t("navigation.chat") }}
        name={AppScreens.CHAT_TAB}
        component={ChatTabScreen}
      />
      <Tab.Screen
        options={{ title: t("navigation.account") }}
        name={AppScreens.ACCOUNT_TAB}
        component={AccountTabScreen}
      />
    </Tab.Navigator>
  );
};

export default Home;
