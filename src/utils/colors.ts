import { darkColors, lightColors } from "@rneui/base";
// import { Appearance } from "react-native";

const useColors = () => {
  // const colorScheme = Appearance.getColorScheme()
  return lightColors;
};
export type AppColorsType = keyof typeof lightColors &
  keyof typeof darkColors;
export {  useColors };
