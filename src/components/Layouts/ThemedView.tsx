import { useAppTheme } from "@/contexts/AppThemeProvider";
import type { ReactNode } from "react";
import { View } from "react-native";

export default function ThemedView({ children }: { children: any }) {
  const { theme } = useAppTheme();
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
}
