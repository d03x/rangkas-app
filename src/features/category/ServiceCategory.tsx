import Text from "@/components/Text";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { PlatformPressable } from "@react-navigation/elements";
import CategoryItem from "./CategoryItem";

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
    <View style={{ marginTop: 20, paddingBottom: 10, paddingInline: 9 }}>
      <FlatList
        scrollEnabled={false}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        nativeID="1"
        scrollEventThrottle={3}
        data={item}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem icon={item.icon} title={item.title} key={index} />
          );
        }}
      />
    </View>
  );
}
