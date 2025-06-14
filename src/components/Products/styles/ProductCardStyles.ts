import Text from "@/components/Text";
import { Image as BaseImage } from "@rneui/themed";
import { Platform } from "react-native";
import styled from "styled-components/native";
import VerifiedIcon from "@asset/icons/shop/verified.svg";
import PopularRibon from "@asset/icons/shop/popularribon.svg";
import type { StyledColorProps } from "@/types/styled.types";
import { Ionicons } from "@expo/vector-icons";
export const Wrapper = styled.View`
  flex: 1;
`;
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Container = styled.TouchableOpacity<StyledColorProps>`
  background-color: ${(pro) => pro.colors?.background};
  /* overflow: ${Platform.OS === "android" ? "hidden" : "visible"}; */
`;
export const Image = styled(BaseImage)<StyledColorProps>`
  height: 150px;
  border-radius: 4px;
  border: 1px solid ${(prop) => prop.colors?.surface};
  object-fit: cover;
`;
export const Name = styled(Text).attrs({
  size: 13,
  font: "Poppins-Medium",
})``;
export const Media = styled.View`
  position: relative;
`;
export const BadgePopular = styled(PopularRibon).attrs((p) => ({
  width: 43,
  height: 40,
}))`
  position: absolute;
  right: -3;
  top: -2;
`;
export const Badge = styled.View``;
export const Price = styled(Text).attrs((pros) => ({
  size: 15,
  font: "Poppins",
}))`
  font-weight: bold;
`;

export const Verified = styled(VerifiedIcon).attrs((e) => ({
  width: 13,
  height: 13,
}))`
  margin-left: 2;
`;
export const PriceInfo = styled.View<StyledColorProps>`
  flex-direction: row;
`;
export const PriceSymbol = styled(Text).attrs((prop) => ({
  size: 14,
  font: "Poppins",
}))`
  font-weight: bold;
`;
export const ShopName = styled(Text).attrs<StyledColorProps>((p) => ({
  size: 12,
  font: "Poppins-SemiBold",
}))`
  color: ${(p) => p.colors?.error};
`;
export const ShopInfo = styled.View`
  flex: 1;
`;
export const ShopRating = styled.View`
  flex-direction: row;
  gap: 3;
  align-items: center;
`;
export const RatingCount = styled(Text).attrs({
  size: 12,
})``;
export const ShopIcon = styled(Ionicons).attrs<StyledColorProps>((e) => ({
  name: "location",
  size: 17,
  color: e.colors?.error,
}))``;
export const Info = styled.View`
  padding: 10px 0px;
  gap: 5;
`;
