import { Pressable, TouchableOpacity, View } from "react-native";
import Text from "../Text";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBarItem, TabBarItemTouth, TabBarWrapper } from "./styles";
import type { JSX } from "react";
import { useColors } from "@/utils/colors";

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
  return (
    <TabBarWrapper>
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

        const colors = useColors();
        const color = isFocused ? colors.primary : colors.text;
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
                  color: color,
                }}
                font="Roboto-Black"
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
