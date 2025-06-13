import { ColorsDark, ColorsLight } from "@/utils/colors";
import React, { useContext, useEffect, useState, type ReactNode } from "react";
import { useColorScheme } from "react-native";
export type ThemeColorTypes = typeof ColorsDark;
const ThemeContext = React.createContext<{
  theme: ThemeColorTypes;
  setDarkTheme: () => void;
}>({
  theme: ColorsLight,
  setDarkTheme() {},
});

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? ColorsDark : ColorsLight;
  const setDarkTheme = () => setIsDark(!isDark);
  const defaultTheme = useColorScheme();
  useEffect(() => {
    if (defaultTheme === "dark") {
      console.log("Dark toggled");

      setIsDark(true);
    } else {
      console.log("Light toggled");
      setIsDark(false);
    }
  }, [defaultTheme]);
  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
