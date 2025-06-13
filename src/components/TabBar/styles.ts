import { useColors } from "@/utils/colors";
import { PlatformPressable } from "@react-navigation/elements";
import { darkColors } from "@rneui/base";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
const colors = useColors();
const TabBarWrapper = styled(Animated.View)`
  height: 60px;
  background-color: ${colors.background};
  overflow: hidden;
  flex-direction: row;
  border-top-width: 1;
  border-top-color: ${colors.grey5};
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
