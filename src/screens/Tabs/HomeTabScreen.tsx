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
import { View } from "react-native";
import Text from "@/components/Text";
import { PlatformPressable } from "@react-navigation/elements";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const items = [
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Delivery",
      icon: <Delivery width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Cari Tukang",
      icon: <Fruits width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Kulineran",
      icon: <Kuliner width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Cari Warung",
      icon: <Warung width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Rangkas",
      icon: <Daging width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Cari Wisata",
      icon: <Wisata width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Cari Ojek",
      icon: <MakananOlahan width={45} height={45} />,
    },
    {
      onPress: () => {
        alert("OKE");
      },
      title: "Lainnya",
      icon: <MoreMenu width={45} height={45} />,
    },
  ];

  return (
    <Layout.ThemedView>
      <AppHeader navigation={navigation} />
      <Layout.ScrollView>
        {/* BEGIN:Service Cateogry */}
        <ServiceCategory item={items} />
        {/* END: Service Cateogry */}

        <Layout.Container>
          <Layout.Section
            title="Cari makanan kuliner"
            subtitle="Cari makanan terdekat disini murah murah murah"
            showMore={true}
          />

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ex
            nulla exercitationem architecto voluptatum est id ea nemo amet? Ab
            architecto omnis, error itaque distinctio impedit! Voluptatem eos
            quos repellat!
          </Text>
        </Layout.Container>
      </Layout.ScrollView>
    </Layout.ThemedView>
  );
};

export default memo(HomeTabScreen);
