import AppScrollView from "@/components/ScrollView";
import Text from "@/components/Text";
import { memo } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  AirbnbRating,
  Avatar,
  Badge,
  Card,
  CheckBox,
  Rating,
  SearchBar,
  Tile,
} from "react-native-elements";
import {
  Header,
  HeaderRight,
  HeaderRightButton,
  HeaderRightButtonBadge,
  HeaderSearch,
  SearchInput,
  UserAvatarLeft,
} from "./styles/HomeStyles";
import Input from "@/components/Input/Input";
import { Ionicons } from "@expo/vector-icons";
import { useColors } from "@/utils/colors";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import { AppScreens } from "@/navigation/AppNavigation/AppScreens";
import { Image } from "react-native";

const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const colors = useColors();
  return (
    <AppScrollView>
      <Header
        style={{
          backgroundColor: colors.primary,
        }}
      >
        <UserAvatarLeft>
          <Avatar rounded title="DH" />
        </UserAvatarLeft>
        <HeaderSearch>
          <SearchInput
            onPress={() => {
              navigation.push(AppScreens.SEARCH_SCREEN);
            }}
          >
            <Ionicons color={"white"} size={20} name="search-sharp" />
            <Text style={{ color: "white" }} size={12}>
              Mau cari apa hari ini?
            </Text>
          </SearchInput>
        </HeaderSearch>
        <HeaderRight>
          <HeaderRightButton>
            <Ionicons color={"white"} size={24} name="notifications" />
          </HeaderRightButton>
          <HeaderRightButton>
            <Ionicons color={"white"} size={24} name="cart" />
            <HeaderRightButtonBadge value={21} status="error" />
          </HeaderRightButton>
        </HeaderRight>
      </Header>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, perspiciatis recusandae! Molestias nihil ipsa porro dolorem modi ipsam laborum id atque a aspernatur consectetur nisi animi voluptatibus temporibus, eius expedita?
            </Text>
    </AppScrollView>
  );
};

export default memo(HomeTabScreen);
