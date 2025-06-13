import { useAppTheme } from "@/contexts/AppThemeProvider";
import type { ReactNode } from "react";
import { View } from "react-native";

export default function ThemedView({ children }: { children: ReactNode }) {
  const { theme } = useAppTheme();
  return (
    <View
      style={{
        backgroundColor: theme.surface,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
}
