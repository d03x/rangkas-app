import { Pressable, TouchableOpacity, View } from "react-native";
import Text from "../Text";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBarItem, TabBarItemTouth, TabBarWrapper } from "./styles";
import type { JSX } from "react";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabBar = ({
  renderIcon,
  navigation,
  state,
  descriptors,
}: BottomTabBarProps & {
  renderIcon: (
    props?: any,
    isFocused?: boolean,
    color?: string
  ) => JSX.Element | undefined;
}) => {
  const { theme } = useAppTheme();
  const { bottom } = useSafeAreaInsets();

  return (
    <TabBarWrapper
      themeColor={theme}
      style={{
        marginBottom: bottom,
      }}
    >
      {state.routes.map((route, index) => {
        const { options }: any = descriptors[route.key];
        const isFocused = index === state.index;
        const title =
          options.title != null
            ? options.title
            : options.headerTitle != null
            ? options.headerTitle
            : route.name;

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!event.defaultPrevented && !isFocused) {
            navigation.navigate(route.name, route.params);
          }
        };
        const color = isFocused ? theme.primaryDark : theme.textSecondary;
        return (
          <TabBarItem key={index}>
            <TabBarItemTouth
              aria-label="button-tab"
              onLongPress={onLongPress}
              onPress={onPress}
            >
              {renderIcon(route.name, isFocused, color)}
              <Text
                style={{
                  fontWeight: "600",
                  color: color,
                }}
                font="Poppins-Bold"
                size={10.3}
              >
                {title}
              </Text>
            </TabBarItemTouth>
          </TabBarItem>
        );
      })}
    </TabBarWrapper>
  );
};

export default TabBar;
