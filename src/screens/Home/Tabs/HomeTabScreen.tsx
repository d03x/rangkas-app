import { memo } from "react";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import * as Layout from "@/components/Layouts";
import * as Styled from "@/screens/Home/screens.styled";
import Text from "@component/Text";
import { useAppTheme } from "@/contexts/AppThemeProvider";

import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import { FlatList, View } from "react-native";
import { stylesUtil as s } from "@/styles";
import { ServiceItemTabButton } from "@component/ServiceItemButton";
import { useAssets } from "expo-asset";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const { theme: colors } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const [assets, error] = useAssets([
    require("@asset/icons/app/ride.webp"),
    require("@asset/icons/app/gocar.webp"),
    require("@asset/icons/app/food.webp"),
    require("@asset/icons/app/delivery.webp"),
    require("@asset/icons/app/toko.webp"),
    require("@asset/icons/app/services.webp"),
  ]);
  const height = top + 50;
  const data = [
    {
      title: "Go Antar",
      icon_url: assets?.[0]?.uri,
    },
    {
      title: "Go Car",
      icon_url: assets?.[1]?.uri,
    },
    {
      title: "Go Food",
      icon_url: assets?.[2]?.uri,
    },
    {
      title: "Go Delivery",
      icon_url: assets?.[3]?.uri,
    },
    {
      title: "Go Shop",
      icon_url: assets?.[4]?.uri,
    },
    {
      title: "Go Tagihan",
      icon_url: assets?.[5]?.uri,
    },
    {
      title: "GoRide",
      icon_url: assets?.[0]?.uri,
    },
    {
      title: "GoRide",
      icon_url: assets?.[0]?.uri,
    },
  ];
  return (
    <Layout.ThemedView>
      <Styled.Header
        colors={colors}
        style={{ paddingTop: top }}
        height={height}
      >
        <Styled.HeaderLeft>
          <Text size={21} style={{ color: colors.white }} font="Maison">
            GoSep
          </Text>
        </Styled.HeaderLeft>
        <Styled.HeaderRight>
          <Ionicons color={colors.white} name="mail" size={25} />
          <Ionicons color={colors.white} name="cart" size={25} />
          <Ionicons color={colors.white} name="search" size={25} />
        </Styled.HeaderRight>
      </Styled.Header>

      <Animated.ScrollView>
        <View
          style={{
            height: 60,
            backgroundColor: colors.primaryDark,
          }}
        />
        <View
          style={[
            [
              s.px_md,
              s.py_md,
              s.mx_md,
              s.flex_row,
              s.shadow_sm,
              s.rounded_md,
              s.align_center,
              s.max_w_full,
              { marginTop: -30 },
              { backgroundColor: colors.white },
            ],
          ]}
        >
          <View style={[s.flex_row, s.align_center, s.gap_md]}>
            <View
              style={[
                s.p_sm,
                { backgroundColor: colors.surface },
                s.rounded_full,
              ]}
            >
              <Ionicons size={23} color={colors.primaryDark} name="wallet" />
            </View>
            <View style={[s.flex_col]}>
              <Text style={[s.font_heavy, s.text_sm]}>Rp19.000,00</Text>
              <Text
                style={[
                  s.font_normal,
                  s.text_xs,
                  { color: colors.textSecondary },
                ]}
              >
                0 coins
              </Text>
            </View>
          </View>
          <View style={[s.flex_row, s.ml_auto, s.gap_md]}>
            <Ionicons name="add-circle" size={25} color={colors.primaryDark} />
            <Ionicons
              name="arrow-down-circle"
              size={25}
              color={colors.primaryDark}
            />
          </View>
        </View>
        <View style={[s.px_md, s.mt_2xl, s.flex_nowrap, s.flex_row]}>
          <FlatList
            numColumns={4}
            data={data}
            renderItem={({ item, index }) => (
              <ServiceItemTabButton
                icon={item.icon_url}
                label={item.title}
                key={index}
              />
            )}
          />
        </View>
        <View
          style={[
            s.px_md,
            s.rounded_md,
            s.py_sm,
            s.mx_md,
            s.flex_row,
            s.align_center,
            {
              backgroundColor: colors.primary,
            },
          ]}
        >
          <Ionicons size={23} color={colors.white} name="partly-sunny" />
          <Text style={[{ color: colors.white },s.text_xs,s.pl_sm]}>
            Diskon s.d 10rb/transaksi
          </Text>
          <Ionicons size={23}  style={[s.ml_auto,{color:colors.white}]} name="arrow-back-circle-outline" />
        </View>
        <View style={[s.px_md, s.mt_md]}>
          <Text style={[s.font_heavy]}>Promo Buat Kamu</Text>
        </View>
      </Animated.ScrollView>
    </Layout.ThemedView>
  );
};

export default memo(HomeTabScreen);
