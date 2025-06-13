import { PlatformPressable } from "@react-navigation/elements";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
const TabBarWrapper = styled(Animated.View)`
  height: 60px;
  background-color: white;
  overflow: hidden;
  flex-direction: row;
  border-top-width: 1;
  border-top-color: #dedede;
`;
const TabBarItem = styled(Animated.View)`
  flex: 1;
`;
const TabBarItemTouth = styled(PlatformPressable)`
  height: 100%;
  align-items: center;
  align-self: center;
  width: 100%;
  align-content: center;
  justify-content: center;
`;
export { TabBarItem, TabBarWrapper, TabBarItemTouth };
