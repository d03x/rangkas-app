import { DarkTheme } from "@react-navigation/native";

const AppColorsLight = {
  primary: "#3A9AF4",
  background: "#ffffff",
  card: "#ffffff",
  text: "#000000",
  border: "#e0e0e0",
  notification: "#ff0000",
};
const AppColorDark = {
  primary: "#3A9AF4",
  background: "#121212",
  card: "#1e1e1e",
  text: "#ffffff",
  border: "#333333",
  notification: "#ff0000",
};
const useColors = () => {
  return !DarkTheme.dark ? AppColorDark : AppColorsLight;
};
export type AppColorsType = keyof typeof AppColorDark &
  keyof typeof AppColorsLight;
export { AppColorsLight, AppColorDark, useColors };
