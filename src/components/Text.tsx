import type { FC } from "react";
import { Text as TextBase } from "@rneui/base";
import { type StyleProp, type TextProps, type TextStyle } from "react-native";
import resources from "@/resources";
import { useAppTheme } from "@/contexts/AppThemeProvider";
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
        { fontFamily: font, fontSize: size },
        {
          color: appTheme.theme.text,
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
