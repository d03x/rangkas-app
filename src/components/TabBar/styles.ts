import type { ThemeColorTypes } from "@/contexts/AppThemeProvider";
import { PlatformPressable } from "@react-navigation/elements";
import { darkColors } from "@rneui/base";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
const TabBarWrapper = styled(Animated.View)<{ themeColor?: ThemeColorTypes }>`
  background-color: ${(prop) => prop.themeColor?.background};
  overflow: hidden;
  flex-direction: row;
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
