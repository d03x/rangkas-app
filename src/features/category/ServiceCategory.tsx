import Text from "@/components/Text";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { PlatformPressable } from "@react-navigation/elements";

type ServicePropsType = {
  item: {
    icon: any;
    title: string;
    onPress: (param?: any) => void;
  }[];
};
export default function ServiceCategory({ item }: ServicePropsType) {
  const theme = useAppTheme();
  return (
    <View style={{ marginTop: 50, paddingInline: 9 }}>
      <FlatList
        scrollEnabled={false}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        nativeID="1"
        scrollEventThrottle={3}
        data={item}
        renderItem={({ item, index }) => {
          return (
            <PlatformPressable
              onPress={item.onPress}
              style={{
                flex: 1,
                overflow: "visible",
                paddingBottom: 10,
                borderRadius: 100,
              }}
              key={index}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
                <Text
                  font="Onest-SemiBold"
                  size={10}
                  style={{ textAlign: "center", marginTop: 6 }}
                >
                  {item.title}
                </Text>
              </View>
            </PlatformPressable>
          );
        }}
      />
    </View>
  );
}
