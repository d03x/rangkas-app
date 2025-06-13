import { useColors } from "@/utils/colors";
import type { ReactNode } from "react";
import { View } from "react-native";

export default function ThemedView({ children }: { children: ReactNode }) {
    const colors = useColors()
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
}
