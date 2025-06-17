import type { FC } from "react";
import { Text as TextBase } from "@rneui/base";
import {
  Platform,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from "react-native";
import resources from "@/resources";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { RFValue } from "react-native-responsive-fontsize";
const Text: FC<
  {
    font?: keyof typeof resources.fonts;
    children: any;
    size?: number;
    style?: StyleProp<TextStyle>;
  } & TextProps
> = ({ font = "Poppins", children, style, size, ...rest }) => {
  const appTheme = useAppTheme();

  return (
    <TextBase
      style={[
        {
          fontFamily: font,
          fontSize: RFValue(size as number),
          includeFontPadding: false,
        },
        {
          color: appTheme.theme.text,
          letterSpacing: Platform.OS === "android" ? 0.1 : 0,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </TextBase>
  );
};
export default Text;
