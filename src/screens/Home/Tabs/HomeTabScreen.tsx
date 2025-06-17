import { memo } from "react";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import * as Layout from "@/components/Layouts";
import * as Styled from "@/screens/Home/screens.styled";
import Text from "@component/Text";
import { useAppTheme } from "@/contexts/AppThemeProvider";

import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import { View } from "react-native";
import { stylesUtil as s } from "@/styles";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const { theme: colors } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const height = top + 50;

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
            <View style={[s.flex_col, s.gap_xs]}>
              <Text style={[s.font_heavy, s.text_md]}>Rp19.000,00</Text>
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
          <View style={[s.flex_row, s.ml_auto, s.gap_lg]}>
            <Ionicons name="add-circle-outline" size={24} />
            <Ionicons name="arrow-down-circle-outline" size={24} />
            <Ionicons name="ellipsis-horizontal-circle" size={24} />
          </View>
        </View>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod
          voluptatum adipisci nesciunt ab eveniet quibusdam voluptatem ipsa.
          Saepe harum corporis inventore molestiae iste. Sapiente, dolores
          tenetur! Illo, quibusdam quasi. Illum, pariatur repudiandae totam
          excepturi quae unde eaque repellendus laborum voluptatibus officia
          dicta, explicabo facere laboriosam molestiae perferendis fuga
          reiciendis dolor, nostrum amet expedita mollitia quo? Sequi cum
          cupiditate earum. Dolor temporibus rerum eveniet maxime neque! Iste
          molestias saepe autem, exercitationem veritatis nostrum, accusamus
          atque cumque dolore quia, debitis cupiditate? Corrupti tempora est
          mollitia veritatis sunt dolores repudiandae deleniti totam! t dolores
          eum voluptatibus aliquam impedit, soluta corrupti nulla iure esse
          corporis fugit dolor molestiae architecto asperiores quaerat sequi
          repellat vel nobis aperiam! Illum, sit? Accusamus ea tempore
          voluptates earum excepturi facere et. Similique aliquam suscipit
          accusamus veniam reiciendis. Pariatur nobis libero tempora, cumque
          obcaecati iste voluptatem aspernatur ad cupiditate, amet ex tempore
          facilis! Dolorem neque mollitia rerum excepturi! Voluptas neque eum,
          consectetur velit, eos nihil sequi recusandae corporis facere tempora
          distinctio quos adipisci maiores modi enim exercitationem, ducimus
          nisi reiciendis quia. Recusandae, eaque. Debitis quisquam ipsa ratione
          harum. Cupiditate rem eius totam deleniti at repellendus enim
          aspernatur, eveniet iusto, quisquam vero error quod vel expedita!
          Sequi repellendus, iusto sunt quas assumenda blanditiis aspernatur.
        </Text>
      </Animated.ScrollView>
    </Layout.ThemedView>
  );
};

export default memo(HomeTabScreen);
