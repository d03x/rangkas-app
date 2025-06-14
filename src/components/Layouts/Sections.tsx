import type { FC } from "react";
import { Platform, Pressable, View } from "react-native";
import Text from "../Text";
import { PlatformPressable } from "@react-navigation/elements";
import { useAppTheme } from "@/contexts/AppThemeProvider";

const Section: FC<{
  title: string;
  subtitle?: string;
  showMore?: boolean;
}> = ({ title, subtitle, showMore }) => {
  const theme = useAppTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 8,
        gap: 10,
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1.5, paddingRight: 10 }}>
        <Text
          font="Roboto-ExtraBold"
          style={{
            color: theme.theme.text,
          }}
          size={18}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            style={{
              color: theme.theme.textSecondary,
            }}
            font="Roboto"
            size={12}
          >
            {subtitle}
          </Text>
        )}
      </View>
      {showMore && (
        <View style={{ flex: 1 }}>
          <Pressable 
            style={{
                overflow:Platform.OS === 'android' ? "hidden" : "visible",
              backgroundColor: theme.theme.surface,
              padding: 10,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: theme.theme.text }}
              font="Onest-SemiBold"
              size={12}
            >
              Show All
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
export default Section;
