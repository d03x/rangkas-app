import Text from "@/components/Text";
import { memo } from "react";
import * as Styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";
import { _ } from "@/utils/translation";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import Bell from "@asset/icons/bell-svgrepo-com.svg";
import ShoppingBag from "@asset/icons/shopping-bags.svg";
import { Avatar, Header } from "@rneui/themed";
import { View } from "react-native";
const AppHeader = ({ navigation }: any) => {
  const { theme } = useAppTheme();
  return (
    <Header
      leftComponent={{
        children: (
          <View
            style={{
              height: 40,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              rounded
              title="DA"
              containerStyle={{
                backgroundColor: theme.secondary,
              }}
            />
          </View>
        ),
      }}
      containerStyle={{
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}
      placement="left"
      rightComponent={{
        children: (
          <Styles.Right>
            <Bell width={21} height={21} />
            <ShoppingBag width={21} height={21} />
          </Styles.Right>
        ),
      }}
      centerComponent={{
        children: (
          <Styles.SearchInput
            themeColor={theme}
            onPress={() => {
              navigation.push(AppScreens.SEARCH_SCREEN);
            }}
          >
            <Ionicons
              color={theme.input.placeholder}
              size={20}
              name="search-sharp"
            />
            <Text
              font="Onest-Bold"
              style={{ color: theme.input.placeholder }}
              size={12}
            >
              {_("home_search_placeholder")}
            </Text>
          </Styles.SearchInput>
        ),
      }}
      backgroundColor={theme.background}
      barStyle="dark-content"
    />
  );
};

export default memo(AppHeader);
