import { memo } from "react";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import * as Layout from "@/components/Layouts";
import AppHeader from "./components/Header";
import ServiceCategory from "@/features/category/ServiceCategory";
import { FlatList } from "react-native";
import ProductCard from "@/components/Products/ProductCard";
import { Image } from "@rneui/themed";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { useAssets } from "expo-asset";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const [assets, error] = useAssets([
    require("@asset/img/laptop.png"),
    require("@asset/img/computer.png"),
    require("@asset/img/televisi.png"),
    require("@asset/img/elektronik.png"),
    require("@asset/img/motor.png"),
    require("@asset/img/car.png"),
  ]);

  const items = [
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Laptop",
      img: assets?.[0]?.uri,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Komputer",
      img: assets?.[1]?.uri,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Elektronik",
      img: assets?.[3]?.uri,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Televisi",
      img: assets?.[2]?.uri,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Motor",
      img: assets?.[4]?.uri,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Motor",
      img: assets?.[4]?.uri,
    },

    {
      onPress: () => {
        alert("OKE");
      },
      title: "Motor",
      img: assets?.[4]?.uri,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Mobil",
      img: assets?.[5]?.uri,
    },
  ];

  const theme = useAppTheme();

  return (
    <Layout.ThemedView>
      <AppHeader navigation={navigation} />

      <Layout.ScrollView>
        <Image
          style={{
            height: 170,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcmV8ZW58MHx8MHx8fDA%3D",
          }}
        />
        {/* BEGIN:Service Cateogry */}
        <Layout.Container
          style={{
            marginTop: -70,
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: theme.theme.background,
          }}
        >
          <ServiceCategory item={items} />
        </Layout.Container>
        <Layout.Container style={{ paddingInline: 9 }}>
          <Layout.Section
            title="Terbaru"
            subtitle="Produk Baru Di Pasar Rangkas"
            showMore={true}
          />

          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={[1, 2, 3, 4, 4, 5, 6, 6, 7]}
            renderItem={({ item, index }) => <ProductCard key={index} />}
          />
        </Layout.Container>
      </Layout.ScrollView>
    </Layout.ThemedView>
  );
};

export default memo(HomeTabScreen);
