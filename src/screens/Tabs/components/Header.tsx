import Text from "@/components/Text";
import { memo } from "react";

import {
  Header,
  HeaderRight,
  HeaderRightButton,
  HeaderRightButtonBadge,
  HeaderSearch,
  SearchInput,
} from "../styles/HomeStyles";
import { Ionicons } from "@expo/vector-icons";
import { useColors } from "@/utils/colors";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";
import { _ } from "@/utils/translation";

const AppHeader = ({ navigation }: any) => {
  const colors = useColors();
  return (
    <Header
      style={{
        backgroundColor: colors.background,
      }}
    >
      <HeaderSearch>
        <SearchInput
          onPress={() => {
            navigation.push(AppScreens.SEARCH_SCREEN);
          }}
        >
          <Ionicons color={colors.grey1} size={20} name="search-sharp" />
          <Text style={{ color: colors.grey1 }} size={12}>
            {_('home_search_placeholder')}
          </Text>
        </SearchInput>
      </HeaderSearch>
      <HeaderRight>
        <HeaderRightButton>
          <Ionicons color={colors.grey1} size={24} name="notifications" />
        </HeaderRightButton>
        <HeaderRightButton>
          <Ionicons color={colors.grey1} size={24} name="cart" />
          <HeaderRightButtonBadge value={21} status="error" />
        </HeaderRightButton>
      </HeaderRight>
    </Header>
  );
};

export default memo(AppHeader);
