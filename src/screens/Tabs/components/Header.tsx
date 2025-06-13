import Text from "@/components/Text";
import { memo } from "react";

import {
  Header,
  HeaderContainer,
  HeaderCurrentLocation,
  HeaderRight,
  HeaderRightButton,
  HeaderRightButtonBadge,
  HeaderSearch,
  SearchInput,
} from "../styles/HomeStyles";
import { Ionicons } from "@expo/vector-icons";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";
import { _ } from "@/utils/translation";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { Image, View } from "react-native";
import Bell from "@asset/icons/bell-svgrepo-com.svg";
import Location from "@asset/icons/location.svg";
import ShoppingBag from "@asset/icons/shopping-bags.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const AppHeader = ({ navigation }: any) => {
  const { top } = useSafeAreaInsets();
  const { theme } = useAppTheme();
  return (
    <View
      style={{
        height: top + 60,
        backgroundColor: theme.background,
      }}
    >
      <Header
        themeColor={theme}
        style={{
          marginTop: top,
          backgroundColor: theme.background,
        }}
      >
        <HeaderContainer>
          <HeaderSearch>
            <SearchInput
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
            </SearchInput>
          </HeaderSearch>
          <HeaderRight>
            <HeaderRightButton>
              <Bell width={21} height={21} />
            </HeaderRightButton>
            <HeaderRightButton>
              <ShoppingBag width={21} height={21} />
              <HeaderRightButtonBadge value={21} status="error" />
            </HeaderRightButton>
          </HeaderRight>
        </HeaderContainer>
        <HeaderCurrentLocation colorTheme={theme}>
          <Location width={20} height={20} />

          <Text
            style={{ color: theme.input.helperText }}
            size={11}
            font="Roboto-Italic"
          >
            Bandung Kabupaten,43111
          </Text>
        </HeaderCurrentLocation>
      </Header>
    </View>
  );
};

export default memo(AppHeader);
