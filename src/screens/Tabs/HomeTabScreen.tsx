import AppScrollView from "@/components/Layouts/ScrollView";
import { memo } from "react";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import * as Layout from "@/components/Layouts";
import AppHeader from "./components/Header";
import ServiceCategory from "@/features/category/ServiceCategory";
import Delivery from "@asset/icons/category/delivery.svg";
import Fruits from "@asset/icons/category/fruits-fruit-svgrepo-com.svg";
import Kuliner from "@asset/icons/category/kuliner.svg";
import Warung from "@asset/icons/category/toko-kelontong.svg";
import Daging from "@asset/icons/category/roast-chicken-chicken-svgrepo-com.svg";
import MakananOlahan from "@asset/icons/category/milk-svgrepo-com.svg";
import MoreMenu from "@asset/icons/shop/menu.svg";
import Wisata from "@asset/icons/category/wisata.svg";
import { FlatList, View } from "react-native";
import Text from "@/components/Text";
import { PlatformPressable } from "@react-navigation/elements";
import ProductCard from "@/components/Products/ProductCard";
import { Image } from "@rneui/themed";
import { useAppTheme } from "@/contexts/AppThemeProvider";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const items = [
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Smartphone",
      icon: <Delivery width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Laptop",
      icon: <Fruits width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Komputer",
      icon: <Kuliner width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Alat Musik",
      icon: <Warung width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Motor",
      icon: <Daging width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Tablet",
      icon: <Wisata width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Perabotan",
      icon: <MakananOlahan width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Cari lainnya",
      icon: <MoreMenu width={45} height={45} />,
    },
  ];

  const theme= useAppTheme()

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

        <Layout.Container
          style={{
            marginTop: -70,
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: theme.theme.background,
          }}
        >
          {/* BEGIN:Service Cateogry */}
          <ServiceCategory item={items} />
          {/* END: Service Cateogry */}
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
