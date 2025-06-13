import type { FC, ReactNode } from "react";
import { Button as ButtonBase, Pressable, StyleSheet } from "react-native";
import type { ButtonProps, PressableProps } from "react-native";
import Animated from "react-native-reanimated";
import { useColors, type AppColorsType } from "@/utils/colors";
import Text from "../Text";
import { BasePressable } from "./styles";
interface ButtonTypes extends PressableProps {
  children: string;
  color: AppColorsType;
}
const styles = StyleSheet.create({
  button: {
    height: 40,
    overflow: "hidden",
    borderRadius: 5,
  },
  button_raw: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 12.5,
  },
});
const Button: FC<ButtonTypes> = ({ children, color, ...rest }) => {
  const currentColor = useColors();

  return (
    <Animated.View style={[styles.button]}>
      <BasePressable style={styles.button_raw} {...rest}>
        <Text style={[styles.text]} font="Onest-SemiBold">
          {children}
        </Text>
      </BasePressable>
    </Animated.View>
  );
};

export default Button;
