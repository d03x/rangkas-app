import { memo } from "react";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import * as Layout from "@/components/Layouts";
import AppHeader from "./components/Header";
import Animated from "react-native-reanimated";
import { PanResponder } from "react-native";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const a = PanResponder.create({
    onPanResponderRelease: (e) => {
      console.log(e);
    },
  });
  return (
    <Layout.ThemedView>
      <AppHeader navigation={navigation} />
      <Animated.View></Animated.View>
    </Layout.ThemedView>
  );
};

export default memo(HomeTabScreen);
