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
        <Styled.HomeCard
          style={{
            borderColor: colors.surface,
            backgroundColor: colors.white,
          }}
        >
          <Text>Appas</Text>
        </Styled.HomeCard>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur
          facere iste ipsa a numquam dicta in, perspiciatis repellendus
          suscipit, eum magni minus earum neque commodi libero iusto cumque
          temporibus? Corrupti aliquid ea minima adipisci quod quos laboriosam
          minus, nesciunt et expedita quibusdam quo impedit necessitatibus est
          consectetur. Iure ea excepturi dicta alias ad voluptates eveniet
          doloribus placeat assumenda unde. Placeat esse repellat ipsum
          architecto iusto excepturi? Quia veniam quod consectetur eius suscipit
          culpa ducimus neque enim ad amet? Esse suscipit culpa fugit at,
          possimus voluptatem officiis quia cumque consequuntur. Exercitationem
          autem unde reprehenderit quas laboriosam dolorem numquam libero
          perspiciatis saepe necessitatibus ducimus aut culpa quibusdam cum,
          harum quod maiores veniam! Modi alias odit nemo quae quam amet aliquam
          autem! Cum earum possimus eum ab quibusdam, saepe dolorem sequi rerum
          obcaecati suscipit! Nam aut in quibusdam expedita magnam velit labore
          aperiam deserunt! Culpa dolorem, harum ex sequi blanditiis quas
          exercitationem? Repellendus sunt saepe neque, deleniti tempore quia.
          Beatae blanditiis, veritatis expedita perferendis dignissimos delectus
          doloribus accusamus repellendus voluptatem velit quae, fugiat error ab
          officia iusto magnam fuga? Ipsam, aliquid obcaecati! Doloremque,
          distinctio illo non delectus nihil possimus praesentium officia
          perspiciatis incidunt aperiam, voluptatum cupiditate. Ipsa dolore,
          delectus praesentium ipsum inventore, perferendis veritatis culpa
          voluptas ratione consequatur accusantium, necessitatibus tempora
          ipsam. Earum consequatur eius esse. Accusamus numquam reprehenderit,
          ad similique ducimus asperiores facilis rem voluptates odio expedita
          maiores iusto iure voluptatum. Provident optio tenetur ipsa explicabo
          amet impedit sint excepturi assumenda? Totam ut cupiditate ducimus
          assumenda aliquam, asperiores consequatur beatae voluptatem ullam.
          Quod ea aliquam temporibus minus amet adipisci veritatis sint, dolorum
          fugiat. Doloribus optio ut tempore et, vel dolore recusandae! Omnis
          iste soluta voluptatibus ex laborum earum quam. Velit, eos veritatis
          quam molestiae animi asperiores quo ipsum. Deserunt expedita eveniet,
          earum, quae, dolorum molestias dolore laudantium vitae repellendus
          nobis aspernatur! Quod, quas! Quia rerum veritatis quae. Dolorum ut
          dolores eum voluptatibus aliquam impedit, soluta corrupti nulla iure
          esse corporis fugit dolor molestiae architecto asperiores quaerat
          sequi repellat vel nobis aperiam! Illum, sit? Accusamus ea tempore
          impedit, facere, inventore possimus natus fugiat ratione at beatae in
          corporis, eum iure fuga illum sed expedita praesentium est voluptate
          tenetur. Reiciendis dicta molestiae iusto. Voluptatem quae atque
          architecto, magnam sint, aut ducimus illum blanditiis cum, inventore
          dolorem error nihil accusantium tempora minus quisquam culpa officia
          fugiat pariatur deleniti nulla voluptas a? Repellendus, animi placeat!
          Voluptatem molestiae, corporis minima iste labore amet quia maxime,
          commodi eaque non velit. Ipsa ipsum maiores maxime neque quo! Harum
          dicta aspernatur sit hic aut voluptatibus expedita placeat
          consequuntur error. Dolores molestiae quam, libero enim recusandae
          natus dolore necessitatibus sapiente consectetur provident illum non
          soluta laboriosam eaque aut harum nam inventore aspernatur perferendis
          aliquam. Nihil doloribus expedita provident. Quos, eum. Distinctio
          enim quasi earum sunt iste. Eos ipsa laboriosam ex impedit unde neque
          dolorum sint laudantium repellat autem, facere magnam reiciendis illo
          et architecto mollitia beatae possimus cum quas dolorem. Accusantium
          voluptate provident facilis voluptates rem blanditiis molestias ipsa
          voluptatem, aliquam magnam sint laborum eius pariatur! Earum nihil
          itaque reiciendis incidunt amet, ea cupiditate doloribus voluptate
          magni laborum eos repudiandae! Illo, dignissimos incidunt natus
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
