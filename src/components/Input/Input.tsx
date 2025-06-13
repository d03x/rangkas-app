import type { FC } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Text from "../Text";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { TextInput } from "./styles";
import type { InputProps } from "react-native-elements";

interface MyInputProps extends InputProps {
  label?: string;
}

const Input: FC<MyInputProps> = ({ label, style, ...rest }) => {
  const onPresIn = () => {
    Alert.alert("lorem");
  };
  return (
    <Animated.View>
      <TextInput label={label} {...rest} />
    </Animated.View>
  );
};

export default Input;
