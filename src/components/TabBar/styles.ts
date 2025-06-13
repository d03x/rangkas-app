import type { ThemeColorTypes } from "@/contexts/AppThemeProvider";
import { PlatformPressable } from "@react-navigation/elements";
import { darkColors } from "@rneui/base";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
const TabBarWrapper = styled(Animated.View)<{themeColor?:ThemeColorTypes}>`
  height: 60px;
  background-color: ${prop=>prop.themeColor?.background};
  overflow: hidden;
  flex-direction: row;
  border-bottom-width: 1;
  border-top-width: 1;
  border-bottom-color: ${prop=>prop.themeColor?.border};
  border-top-color: ${prop=>prop.themeColor?.border};
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
