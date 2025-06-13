import { useState, type FC } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Text from "../Text";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { TextInput } from "./styles";
import type { InputProps } from "react-native-elements";
import { useAppTheme } from "@/contexts/AppThemeProvider";

interface MyInputProps extends InputProps {
  label?: string;
}

const Input: FC<MyInputProps> = ({ label, style, ...rest }) => {
  const theme = useAppTheme();
  const [isBlur, setIsBlur] = useState(false);
  const focus = () => {
    setIsBlur(false);
  };

  const setFocus = () => {
    setIsBlur(true);
  };
  return (
    <TextInput
      leftIconContainerStyle={{
        marginRight:0,
        marginLeft:0,
      }}
      theme={theme.theme}
      onFocus={setFocus}
      isBlur={isBlur}
      onBlur={focus}
      label={label}
      {...rest}
    />
  );
};

export default Input;
