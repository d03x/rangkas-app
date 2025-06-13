import Text from "@/components/Text";
import { FlatList, TouchableOpacity, View } from "react-native";
import Vegetables from "@asset/icons/category/vegetables-salad-svgrepo-com.svg";
import Fruits from "@asset/icons/category/fruits-fruit-svgrepo-com.svg";
import Food from "@asset/icons/category/vegetables-salad-svgrepo-com (1).svg";
import Sarapan from "@asset/icons/sandwich-burger-svgrepo-com.svg";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { PlatformPressable } from "@react-navigation/elements";
import Daging from "@asset/icons/category/roast-chicken-chicken-svgrepo-com.svg"
import MakananOlahan from "@asset/icons/category/milk-svgrepo-com.svg"

export default function CategoryLists() {
  const category = [
    {
      title: "Sayuran",
      icon: <Vegetables width={40} height={40} />,
    },
    {
      title: "Buah",
      icon: <Fruits width={40} height={40} />,
    },
    {
      title: "Food",
      icon: <Food width={40} height={40} />,
    },
    {
      title: "Sarapan",
      icon: <Sarapan width={40} height={40} />,
    },
     {
      title: "Daging",
      icon: <Daging width={40} height={40} />,
    },
    {
      title: "Makanan Olahan",
      icon: <MakananOlahan width={40} height={40} />,
    },
  ];
  const theme = useAppTheme();
  return (
    <View style={{ marginTop: 24 }}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginInline:9,
          flexDirection: "row",
        }}
      >
        <Text
          size={18}
          font="Roboto-ExtraBold"
          style={{
            marginBottom: 10,
          }}
        >
          Kategori
        </Text>
        <Text
          size={13}
          font="Roboto-Bold"
          style={{ color: theme.theme.secondaryLight }}
        >
          Lihat Semua
        </Text>
      </View>
      <FlatList
        horizontal
        data={category}
        renderItem={({ item, index }) => {
          return (
            <PlatformPressable
              style={{
                overflow: "hidden",
                elevation: 1,
                paddingVertical: 9,
                paddingInline: 13,
                backgroundColor: "white",
                borderRadius: 10,
                marginLeft: index == 0 ? 10 : 8,
                marginRight: index + 1 == category.length ? 10 : 0,
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
                  font="Roboto-Medium"
                  size={11}
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
