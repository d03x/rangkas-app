import type { FC, ReactNode } from "react";
import { Button as ButtonBase, Pressable, StyleSheet } from "react-native";
import type { ButtonProps, PressableProps } from "react-native";
import Text from "./Text";
import Animated from "react-native-reanimated";
import { BasePressable } from "./Buttons/styles";
interface ButtonTypes extends PressableProps {
  children: string;
}
const styles = StyleSheet.create({
  button: {
    height: 40,
    borderBottomWidth: 4,
    borderBottomColor: "#d40101",
    backgroundColor: "red",
    overflow: "hidden",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 12.5,
  },
});
const Button: FC<ButtonTypes> = ({ children, ...rest }) => {
  return (
    <Animated.View style={[styles.button]}>
      <BasePressable {...rest}>
        <Text style={[styles.text]} font="Onest-SemiBold">
          {children}
        </Text>
      </BasePressable>
    </Animated.View>
  );
};

export default Button;
