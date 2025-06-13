import { darkColors, lightColors } from "@rneui/base";
import { Appearance, useColorScheme } from "react-native";

const useColors = () => {
  const colorsScgene = Appearance.getColorScheme()
  if( colorsScgene === 'dark' ) {
    return darkColors;
  }
  return lightColors;
};
export type AppColorsType = keyof typeof lightColors &
  keyof typeof darkColors;
export {  useColors };
