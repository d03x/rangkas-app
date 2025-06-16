import Text from "@/components/Text";
import { memo } from "react";
import * as Styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";
import { _ } from "@/utils/translation";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import Bell from "@asset/icons/bell-svgrepo-com.svg";
import ShoppingBag from "@asset/icons/shopping-bags.svg";
import { Avatar, Badge, Header, Image } from "@rneui/themed";
import { View } from "react-native";
import { useAssets } from "expo-asset";
import Coint from "@asset/icons/header/coint.svg";
const AppHeader = ({ navigation }: any) => {
  const [assets, error] = useAssets([require("@asset/logo/logo_main.png")]);
  const { theme } = useAppTheme();
  return (
    <Header
      containerStyle={{
        borderBottomWidth: 0,
      }}
      elevated={false}
      centerContainerStyle={{}}
      leftContainerStyle={{
        justifyContent: "center",
      }}
      rightContainerStyle={{
        alignContent: "center",
        justifyContent: "center",
      }}
      leftComponent={{
        children: (
          <View
            style={{
              height: 40,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
              }}
              source={{ uri: assets?.[0]?.uri }}
            />
          </View>
        ),
      }}
      placement="left"
      rightComponent={{
        children: (
          <View
            style={{
              backgroundColor: theme.surface,
              paddingInline: 10,
              paddingVertical: 4,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 4,
            }}
          >
            <Coint width={14} height={14} />
            <Text
              font="Poppins"
              style={{
                fontSize: 14,
                color: theme.text,
              }}
            >
              20.000
            </Text>
          </View>
        ),
      }}
      backgroundColor={theme.primaryDark}
      barStyle="dark-content"
    />
  );
};

export default memo(AppHeader);

//
//  <Styles.SearchInput
//             themeColor={theme}
//             onPress={() => {
//               navigation.push(AppScreens.SEARCH_SCREEN);
//             }}
//           >
//             <Ionicons
//               color={theme.input.placeholder}
//               size={20}
//               name="search-sharp"
//             />
//             <Text
//               font="Onest-Bold"
//               style={{ color: theme.input.placeholder }}
//               size={12}
//             >
//               {_("home_search_placeholder")}
//             </Text>
//           </Styles.SearchInput>
