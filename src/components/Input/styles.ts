import type { ThemeColorTypes } from "@/contexts/AppThemeProvider";
import { Input } from "react-native-elements";
import styled from "styled-components/native";
const TextInput = styled(Input).attrs<{
  isBlur?: boolean;
  theme: ThemeColorTypes;
}>(({ isBlur, theme, ...props }) => {
  return {
    labelStyle: {
      color: props.errorMessage
        ? theme.input.errorText
        : isBlur
        ? theme.input.borderFocused
        : theme.input.text,
      fontSize: 13,
      marginLeft: 2,
      marginBottom: 3,
    },
    errorStyle: {
      color: theme.input.errorText,
    },
    containerStyle: {
      // height: 70,
      paddingVertical: 0,
      paddingHorizontal: 0,
      margin: 0,
    },

    placeholderTextColor: props.errorMessage
      ? theme.input.errorText
      : theme.input.placeholder,
    inputStyle: {
      color: props.errorMessage ?  theme.input.errorText : theme.input.text,
      fontWeight: 600,
      fontSize: 13,
    },

    inputContainerStyle: {
      backgroundColor: isBlur ? theme.surface : theme.background,
      borderWidth: 1,
      marginBottom: 0,
      paddingInline: 5,
      borderColor: props.errorMessage
        ? theme.input.errorText
        : !isBlur
        ? theme.input.border
        : theme.input.borderFocused,
      borderRadius: 5,
    },
  };
})``;

export { TextInput };
