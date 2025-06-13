import type { FC } from "react";
import {
  Text as TextBase,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from "react-native";
import resources from "@/resources";
const Text: FC<
  {
    font?: keyof typeof resources.fonts;
    children: any;
    size?: number;
    style?: StyleProp<TextStyle>;
  } & TextProps
> = ({ font = "Onest", children, style, size, ...rest }) => {
  return (
    <TextBase style={[{ fontFamily: font, fontSize: size }, style]} {...rest}>
      {children}
    </TextBase>
  );
};
export default Text;
